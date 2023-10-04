const products = [
    {
        id: "1",
        name: "Ramen",
        category: "ramen",
        img : "https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg",
        price: 4000,
        stock: 25,
        description : "Fideos, cerdo, huevo, caldo, verdeo"
    },
    {
        id: "2",
        name: "Sushi",
        category: "sushi",
        img : "https://hips.hearstapps.com/hmg-prod/images/spicy-crab-rolls4-1654808938.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
        price: 5000,
        stock: 25,
        description : "15 piezas de sushi a eleccion"
    },
    {
        id: "3",
        name: "Pollo teriyaki",
        category: "teriyaki",
        img : "https://hips.hearstapps.com/hmg-prod/images/chicken-teriyaki-recipe-2-1677529319.jpg?crop=0.502xw:1.00xh;0.237xw,0&resize=1200:*",
        price: 3500,
        stock: 25,
        description : "Pollo teriyaki"
    },
    {
        id: "4",
        name: "Sushi",
        category: "sushi",
        img : "https://images.hola.com/imagenes/cocina/recetas/20200408165233/maki-sushi-tempura-pollo/0-809-231/maki-sushi-pollo-m.jpg",
        price: 7000,
        stock: 25,
        description : "15 piezas de sushi calientes a eleccion"
    },
    {
        id: "5",
        name: "Ramen",
        category: "ramen",
        img : "https://img.cuisineaz.com/660x660/2018/12/30/i145407-ramen-au-poulet.jpeg",
        price: 5000,
        stock: 25,
        description : "Fideos, pollo, huevo, caldo, verdeo,brotes de soja"
    },
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter( prod => prod.category === category ))
        }, 500);
    })

}