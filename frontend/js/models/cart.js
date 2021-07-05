class Cart {
    constructor(contents = [], total = 0){
        this.contents = contents;
        this.total = total;
    }
    get total(){
        return this.total
    }

    addToCart(item){
        this.contents.push(item);
        this.total += item.price;
    }
}