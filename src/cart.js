class Cart {
  constructor() {
    this.items = [];
    this.listeners = [];
  }

  /**
   * Добавить товар в корзину
   * @param {Object} item - Товар, который добавляется
   * @param {number} item.id - ID товара
   * @param {string} item.name - Название товара
   * @param {number} item.price - Цена товара
   * @param {number} quantity - Количество товара
   */
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(lst => lst !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener());
  }

  addItem(item, quantity = 1) {
    const existingItem = this.items.find(cartItem => cartItem.code === item.code);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        ...item,
        quantity,
      });
    }
    this.items.sort((a, b) => a.code - b.code);
    this.notify();
  }

  /**
   * Получить количество товаров в корзине
   * @returns {number} - Общее количество товаров
   */
  getItemCount() {
    return this.items.length;
  }

  /**
   * Получить общую стоимость товаров в корзине
   * @returns {number} - Общая стоимость товаров
   */
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  /**
   * Удалить товар из корзины по его code
   * @param {number} code
   */
  removeItem(code) {
    this.items = this.items.filter(item => item.code !== code);
    this.notify();
  }

  /**
   * Очистить корзину
   */
  clearCart() {
    this.items = [];
    this.notify();
  }

  /**
   * Получить список товаров в корзине
   * @returns {Array} - Список товаров
   */
  getItems() {
    return this.items;
  }
}

export default Cart;
