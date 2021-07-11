class Order {

    constructor(total,items){
        this.total = total;
        this.items = items;
        this.id = null;
    }

    renderOrderForm(){
            const orderForm = document.querySelector("#checkout-content");
            orderForm.innerHTML = `
            <form class="checkout-form">
                <div class="input-field checkout-input">
                    <input type="text" name="name" id="name" required>
                    <label for="name">Name</label>
                </div>
                <div class="input-field checkout-input">
                        <input type="email" name="email" id="email" required>
                        <label for="email">Email</label>
                </div> 
                <div class="input-field checkout-input">
                        <input type="text" name="phone" id="phone" required>
                        <label for="phone">Phone Number</label>
                </div> 
                <div class="input-field checkout-input">
                    <input type="text"name="address" id="address"required>
                    <label for="address">Address</label>
                </div> 
                <div class="row center">
                        <input type="submit" class="btn-small" value="Place Order">
                   </div> 
            </form>

            `
        
        const form = document.querySelector("form");
        form.addEventListener("submit", e => this.placeOrder.call(this, e))
    }

    async placeOrder(e){
        e.preventDefault()
        console.log(this.items)
        const items = this.items.map(product => {
            return {id: product.id, quantity: product.quantity}
        })
        const data = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            address: $("#address").val(),
            items: items,
            total: this.total,
        }
      
        const config = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        try{
            let baseURL = "http://localhost:3000/"
            const response = await fetch(baseURL+"orders", config);
            if(response.ok){
                const json = await response.json();
                cart.clear();
                this.renderOrder(json);
            }
        }
        catch(err){
        }
        
    }

    renderOrder(order){
        this.id = order.id;
        const orderContainer = document.querySelector("#orders")
        orderContainer.innerHTML = 
            `   <p class=""><u>${order.name}</u></p>
                <p class="">Email: ${order.email}</p>  
                <p class="">Address: ${order.address}</p>    
                <p class="">Phone: ${order.phone}</p>     
            `
        for(const item of order.items){
            orderContainer.innerHTML += `
                ${item.name} x ${item.quantity}
            `
        }
        orderContainer.innerHTML += `
            <p class=""><b>Total: ${order.total}</b></p>
            <button class="btn" id="cancel-order">Cancel Order</button>
        `
        const cancelOrderBtn = document.querySelector("#cancel-order")
        cancelOrderBtn.addEventListener("click", this.cancelOrder.bind(this))
    }

}//orderclassend