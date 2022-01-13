let order = {
    order_Id: 414,
    order_Name: "5 Discount Product's",
    get_Order_Details: () => { return "Order Delivered Successfully" }
}
console.log(order.order_Id)
console.log(order.order_Name)
console.log(order.get_Order_Details())
console.log(order.price);//undefined
console.log(order.show_Details());