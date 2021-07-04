class API {

constructor () {
    this.baseUrl = "http://localhost:3000"
} //end of constructor to make it easier for base url

getProducts() {
    return fetch(`${this.baseUrl}/products`) 
    .then(resp => resp.json())
}//end of getProducts (gets all the products)

getCertainProduct(prodId) {
    //console.log(prodId)
    return fetch(`${this.baseUrl}/products/${prodId}`)
    .then(resp => resp.json())
}

} //end of API class