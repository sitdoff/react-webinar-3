export default {
  /**
   * Открытие формы по id коммента
   * @param id
   */
  open: id => {
    console.log('OPEN', id);
    return { type: 'reply/open', payload: { id } };
  },

  /**
   * Закрытие формы
   * @param id
   */
  close: () => {
    console.log('CLOSE');
    return { type: 'reply/close', payload: {} };
  },
};
