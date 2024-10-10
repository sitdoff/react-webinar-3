// Начальное состояние
export const initialState = {
  data: {},
  waiting: false, // признак ожидания загрузки
};

// Обработчик действий
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'comments/load-start':
      return { ...state, data: {}, waiting: true };

    case 'comments/load-success':
      return { ...state, data: action.payload.data, waiting: false };

    case 'comments/load-error':
      return { ...state, data: {}, waiting: false }; //@todo текст ошибки сохранять?

    case 'comments/create-success':
      const newComment = {
        ...action.payload.data,
        author: {
          ...action.payload.data.author,
          profile: {
            name: action.payload.authorUsername,
          },
        },
      };

      const result = {
        ...state,
        data: { items: [...state.data.items, newComment] },
      };
      return result;

    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
