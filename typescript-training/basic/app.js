
const menu = [
    { name: "apple", price: '100' },
    { name: "orange", price: '200' },
    { name: "grape", price: '150' },
    { name: "pineapple", price: '50' },
    { name: "strawberry", price: '200' },
]

const cashInRegister = 100;
const nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    cashInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
    orderQueue.push(newOrder);
    return newOrder;
}


function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    order.status = 'completed'
    return order;
}

addNewPizza({name: 'chicken bacon ranch', const: 12})
addNewPizza({name: 'BBQ chicken', const: 13})
addNewPizza({ name: 'Spicy Sausage', const: 11 })

placeOrder("chicken Bacon ranch")
completeOrder('1')

console.log("Menu",  menu)
console.log("Cash in Register",  cashInRegister)
console.log("OrderQueue",  orderQueue)
