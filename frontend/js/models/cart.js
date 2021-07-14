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
        this.renderCart();
    }

    
   

    renderCart() {
        const cartContents = document.getElementById("cart-contents");
        if (this.contents.length == 0){
            cartContents.innerHTML = "Your cart is currently empty!"
            $("#checkout-content").css("display", "none")
        }
        else{
                cartContents.innerHTML = "";
                this.contents.forEach(function(product){
                    console.log(product)
                    cartContents.innerHTML += `
                    <div class="cart-item">
                        <img src="${product.productImage}" alt="" class="cart-img">  <span class="cart-item-name">${product.title} - $${product.price} x ${product.quantity}</span> <button class="remove-cart" id=${product.id}><i class="material-icons tiny">remove_shopping_cart</i></button> 
                    </div>
                    <br>
                    `
                })
            cartContents.innerHTML += `
            <span class="total"><b>Total: $${this.total.toFixed(2)}</b></span><br><br>
            <button class="btn-small" id="order">Checkout</button>
            `
            const checkoutBtn = document.querySelector("#order")
            checkoutBtn.addEventListener("click", this.checkOut.bind(this));

            const removeBtns = document.querySelectorAll(".remove-cart")
            removeBtns.forEach(button => button.addEventListener("click", e => this.removeFromCart(e)))
        }
    }

    removeFromCart(e){
        console.log(e)
        try{
            const product = this.contents.find(product => product.id == e.target.parentElement.id);
            product.quantity--;
            this.total -= product.price
            if (product.quantity > 0){
                this.renderCart();
            }
            else{
                const index = this.contents.indexOf(product);
                this.contents.splice(index, 1);
                this.renderCart();
            }
        }
        catch(err){
            
        }
    }

    checkOut(){
        const order = new Order(this.total, this.contents);
        order.renderOrderForm();
    }

    clear(){
        this.contents = [];
        this.renderCart();
    }
}