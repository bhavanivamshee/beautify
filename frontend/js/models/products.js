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

        const container = document.getElementById('container')//grabbing container in HTML
        container.classList.add('container-div')//need to add container div for grid in css

        const eachProductDiv = document.createElement('div')
        eachProductDiv.classList.add('each-product')

        const titleHeader = document.createElement('h3')
        titleHeader.textContent = this.title

        const productPic = document.createElement("IMG");
        productPic.setAttribute('class', 'products-images')
        productPic.setAttribute('id', this.id);
        productPic.src = this.productImage

        const priceTag = document.createElement('h3')
        priceTag.setAttribute('certain-product-id', this.id)
        priceTag.textContent = `$${this.price}`

        const descriptionBtn = document.createElement("BUTTON")
        descriptionBtn.classList.add('btn');
        descriptionBtn.textContent = 'and what about it?'
        descriptionBtn.addEventListener("click", function(event) {
            event.preventDefault()
            const prodId = this.previousElementSibling.firstChild.attributes[0].value
            let api = new API;
            api.getCertainProduct(prodId)
            .then(product => {
                const newProd = new Products(product)
                newProd.singleProduct(product)
            })
        })

        eachProductDiv.appendChild(titleHeader)
        eachProductDiv.appendChild(productPic)
        eachProductDiv.appendChild(priceTag)
        eachProductDiv.appendChild(descriptionBtn)
        container.appendChild(eachProductDiv)
        return container
    }//holds all products? Needs title, pic, and price for display, description for more info.

    singleProduct() {

    }//shows single product with description
        
}//end of products class