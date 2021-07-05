document.addEventListener("click", (event)=>{ console.log("💻🔬👀:: You Just Clicked on == ", event.target) }  )
const api = new API;
const cart = new Cart();
document.addEventListener("DOMContentLoaded", function(){  console.log("WE, ARE,, LIVE🙆🏾‍♂️✨")

    //product fetch

    api.getProducts() 
    .then(products =>  {
        products.forEach(product => {
            const newProd = new Products(product)

            newProd.collectionOfProducts()
        })
    })


    const cartCollapse = document.querySelector(".cart");
    cartCollapse.addEventListener("click", renderCart);

    $(document).ready(function(){
        $('.collapsible').collapsible();
    });

//render products

//const renderProduct =(productObj)=>{
    //const cardDiv = document.createElement("div")
    //cardDiv.classList.add("card")
        //cardDiv.setAttribute("data-id", productObj.id)
        //cardDiv.id = productObj.id
    //cardDiv.innerHTML = `
        //<h2>${productObj.title}</h2>
       // <img src=${productObj.product_image} class="product-avatar" />
   // `
    //const collectionDiv = document.querySelector("#product-collection")
      //collectionDiv.append(cardDiv)
//}

//const renderAllProducts =(prodArray)=> {
    //prodArray.forEach(productObj => { renderProduct(productObj)})
//}


})//end of DOM content