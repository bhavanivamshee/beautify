class Products {

    static all = [];

    constructor({title, description, price, quantity, category, id, product_image}) {
        this.title = title; 
        this.description = description;
        this.price = price; 
        this.quantity = quantity;
        this.category = category;
        this.id = id;
        this.productImage = product_image;
        Products.all.push(this);
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
            container.style.display = 'none';
            let prodId = this.previousElementSibling.firstChild.attributes[0].value
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
        prodPic.src = this.productImage//grabbing specific product image

        const newUl = document.createElement('ul');
        const newLi = document.createElement('li');
        newLi.setAttribute('class', 'single-product-li')
        newLi.textContent = `$${this.price}`
        newUl.appendChild(newLi)// adding price

        let closeSpan = document.createElement('span'); 
        closeSpan.setAttribute('class', 'close'); 
        closeSpan.textContent = 'Close (X)';
        closeSpan.addEventListener('click', function(event) {
            event.preventDefault();
            certainProductDiv.style.display = 'none';
            let allProductsDiv = document.getElementById('container'); 
            allProductsDiv.style.display = 'grid';
        })//adding close button

        const productDescription = document.createElement('p');
        productDescription.setAttribute('class', 'description-ptag')
        productDescription.textContent = `Description: ${this.description}`; //product description

        const productCategory = document.createElement('p');
        productCategory.setAttribute('class', 'category-ptag')
        productCategory.textContent = `Category: ${this.category}`; //product category

        //creating the cart button element and setting it's attributes
        const cartBtn = document.createElement("BUTTON");
        cartBtn.classList.add('add-cart');
        cartBtn.setAttribute('id', `${this.id}`)
        cartBtn.textContent = "Add to cart"
        let obj = this; //whole product class
        cartBtn.addEventListener('click', function (e){
            event.preventDefault
            cartBtn.id = this.id
        })


        certainProductDiv.appendChild(productName);
        certainProductDiv.appendChild(prodPic);
        certainProductDiv.appendChild(newUl);
        certainProductDiv.appendChild(closeSpan);
        certainProductDiv.appendChild(productDescription);
        certainProductDiv.appendChild(productCategory);
        certainProductDiv.appendChild(cartBtn);
        //adding everything to the certain product div

        document.body.appendChild(certainProductDiv)

    }//shows single product with description
        
}//end of products class