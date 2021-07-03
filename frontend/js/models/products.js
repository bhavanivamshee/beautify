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

        const eachProductDiv = document.createElement('div')
        eachProductDiv.classList.add('each-product')


    }//holds all products? Needs title, pic, and price for display, description for more info.
        
}//end of products class