/** @format */
class Grocery {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.itemFullSku = `Product: ${name}, Price: ${price}, Quantity: ${quantity}.`;
    }
}
function returnProduct(product) {
    return ` Product: ${product.name}, ${product.quantity} in stock at $${product.price}`;
}
let p1 = new Grocery("Milk", "1", "1.99");
let p2 = new Grocery("Bread", "2", "2.99");
let p3 = new Grocery("Eggs", "12", "2.50");
let p4 = new Grocery("Sausage", "6", "3.50");
let groceryList = [
    returnProduct(p1),
    returnProduct(p2),
    returnProduct(p3),
    returnProduct(p4)
];
document.body.textContent = groceryList.toString();
