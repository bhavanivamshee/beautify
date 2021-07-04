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
        
        let ulTag = document.createElement('ul')

        let priceLiTag = document.createElement('li')
        priceLiTag.setAttribute('certain-product-id', this.id)
        priceLiTag.textContent = `$${this.price}`

        const moreInfoBtn = document.createElement("BUTTON")
        moreInfoBtn.classList.add('btn');
        moreInfoBtn.textContent = 'and what about it?'
        moreInfoBtn.addEventListener("click", function(event) {
            event.preventDefault()
            console.log(this.previousElementSibling)
            const prodId = this.previousElementSibling.firstChild.attributes[0].value
            let api = new API;
            api.getCertainProduct(prodId)
            .then(product => {
                const newProd = new Products(product)
                newProd.singleProduct(product)
            })
        })

        ulTag.appendChild(priceLiTag)

        eachProductDiv.appendChild(titleHeader)
        eachProductDiv.appendChild(productPic)
        eachProductDiv.appendChild(ulTag)
        eachProductDiv.appendChild(moreInfoBtn)
        container.appendChild(eachProductDiv)
        return container
    }//holds all products? Needs title, pic, and price for display, description for more info.

    singleProduct() {

        const certainProductDiv = document.createElement('div')
        certainProductDiv.classList.add('certain-product')

        const productName = document.createElement('h2');
        productName.textContent = this.title//grabbing name

        const prodPic = document.createElement("IMG")
        prodPic.src = this.productImage

        certainProductDiv.appendChild(productName);
        certainProductDiv.appendChild(prodPic)

    }//shows single product with description
        
}//end of products class