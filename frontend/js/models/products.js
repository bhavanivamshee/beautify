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

    collectionofProducts () {
        let container = document.getElementById('container')
        container.classList.add('container-div')
    }

}//end of products class