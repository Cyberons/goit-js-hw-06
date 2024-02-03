const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // У цьому коді ми створюємо об'єкт customer з певними властивостями, такими як ім'я користувача, баланс, знижка та історію замовлень. Окрім того, ми визначаємо методи для роботи з цими властивостями.

  // Змінений код початок
  getBalance() {
    return this.balance;
  },
  // Метод getBalance() повертає поточний баланс користувача.
  getDiscount() {
    return this.discount;
  },
  // Метод getDiscount() повертає поточне значення знижки.
  setDiscount(value) {
    this.discount = value;
  },
  // Метод setDiscount(value) змінює значення знижки на вказаний параметр value.
  getOrders() {
    return this.orders;
  },
  // Метод getOrders() повертає масив замовлень користувача.
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Метод addOrder(cost, order) додає нове замовлення в масив замовлень. Він також зменшує баланс користувача на вартість замовлення з урахуванням знижки.
  // Змінений код кінець
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]