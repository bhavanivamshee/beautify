document.addEventListener("click", (event)=>{ console.log("💻🔬👀:: You Just Clicked on == ", event.target) }  )
const api = new API;
document.addEventListener("DOMContentLoaded", function(){  console.log("WE, ARE,, LIVE🙆🏾‍♂️✨")

//product fetch

fetch(API_DATABASE_URL).then(response => response.json())
.then(productArray => {console.log(productArray);
renderAllProducts(productArray)
})

//render products

const renderProduct =(productObj)=>{
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card")
        cardDiv.setAttribute("data-id", productObj.id)
        cardDiv.id = productObj.id
    cardDiv.innerHTML = `
        <h2>${productObj.title}</h2>
        <img src=${productObj.product_image} class="product-avatar" />
    `
    const collectionDiv = document.querySelector("#product-collection")
      collectionDiv.append(cardDiv)
}

const renderAllProducts =(prodArray)=> {
    prodArray.forEach(productObj => { renderProduct(productObj)})
}


})