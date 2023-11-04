import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, documentId, getDocs, Timestamp, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig"
import CheckoutForm from "../CheckOutForm/CheckOutForm"

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, getTotal, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const total = getTotal();
            const order = {
                buyer: { name, phone, email },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            };
           // console.log(cart)
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId('products'), 'in', ids)));
            const { docs } = productsAddedFromFirestore;
            console.log (docs)
            docs.forEach(doc => {
                const productData = doc.data();
                const stockDb = productData.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const productQuantity = productAddedToCart?.quantity;

                console.log (productAddedToCart)

                if (stockDb >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDb - productQuantity }, true);
                } else {
                    outOfStock.push({ id: doc.id, ...productData });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, order);
                setOrderId(orderAdded.id);
                clearCart();
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }

    return (
        <div>
            
            <h1>Ingresa tus datos para terminar la compra</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;