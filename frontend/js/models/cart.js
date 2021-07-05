class Cart {
    constructor(contents = [], total = 0){
        this.contents = contents;
        this.total = total;
    }


    addProduct(product){
        if (!cart.contents.includes(product)){
            this.contents.push(product);
        }
        this.total += product.price;
        product.quantity++;
        console.log(`${product.title} has been added to the cart`)
    }

    
}