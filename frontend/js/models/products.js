class Products {

    constructor({title, description, price, quantity, category, id, product_image}) {
        this.title = title; 
        this.description = description;
        this.price = price; 
        this.quantity = quantity;
        this.category = category;
        this.id = id;
        this.productImage = product_image;
    }//products constructor

    collectionOfProducts () {
        console.log(this)

        const container = document.getElementById('container')//grabbing container in HTML
        container.classList.add('container-div')//need to add container div for grid in css


    }//holds all products? make method with each product
        
}//end of products class