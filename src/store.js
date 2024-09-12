/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}, startItemCode = 1) {
    this.nextItemCode = startItemCode;
    this.state = {
      ...initState,
      list: initState.list.map(item => ({
        ...item,
        code: this.setItemCode(),
      })),
    };
    this.listeners = []; // Слушатели изменений состояния
  }

  setItemCode() {
    return this.nextItemCode++;
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    this.setState({
      ...this.state,
      list: [...this.state.list, { code: this.setItemCode(), title: 'Новая запись' }],
    });
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code),
    });
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => ({
        ...item,
        selected: item.code === code ? !item.selected : false,
        selectCount:
          item.code === code && !item.selected
            ? (item.selectCount || 0) + 1
            : item.selectCount || 0,
      })),
    });
  }
}

export default Store;
