import "./ItemDetailContainer.css"
import {useState, useEffect} from "react"
import ItemDetail from "../ItemDetail.js/ItemDetail"
import { useNavigate, useParams} from "react-router-dom"
import {getDoc,doc} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const {itemId} = useParams()

    useEffect(() =>{
        setLoading(true)

        const docRef =doc(db, "products", itemId)

        getDoc(docRef)
            .then(response =>{
                console.log (response.data())
                if (!response.exists()) {
                    console.log("no existe")
                    navigate("/404")
                }
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setProduct(productAdapted)})
        .catch(error =>{
            console.log(error)
        })
        .finally(() =>{
            setLoading(false)
        })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;