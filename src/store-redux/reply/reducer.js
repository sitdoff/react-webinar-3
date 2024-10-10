// Начальное состояние
const initialState = {
  comment: null,
};

// Обработчик действий
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'reply/open':
      return { comment: action.payload.id };
    case 'reply/close':
      return { comment: null };
    default:
      return state;
  }
}

export default reducer;
