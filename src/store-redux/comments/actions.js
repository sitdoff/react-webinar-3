export default {
  /**
   * Загрузка комментариев
   * @param id
   * @return {Function}
   */
  load: id => {
    return async (dispatch, getState, services) => {
      dispatch({ type: 'comments/load-start' });

      try {
        const response = await services.api.request({
          url: `api/v1/comments?fields=items(_id,text,dateCreate,author(profile(name)),parent(_id,_type),isDeleted),count&limit=*&search[parent]=${id}`,
        });
        // Комментарии загружены успешно
        console.log('COMMENTS LOAD SUCCESS', response);
        dispatch({ type: 'comments/load-success', payload: { data: response.data.result } });
      } catch (e) {
        //Ошибка загрузки
        dispatch({ type: 'comments/load-error' });
      }
    };
  },
  create: (text, parent, authorUsername) => {
    return async (dispatch, getState, services) => {
      try {
        const response = await services.api.request({
          url: '/api/v1/comments',
          method: 'POST',
          body: JSON.stringify({
            text: text,
            parent: { _id: parent._id, _type: parent._type ? parent._type : 'comment' },
          }),
        });
        console.log('COMMENTS CREATE SUCCESS', response);
        dispatch({
          type: 'comments/create-success',
          payload: { data: response.data.result, authorUsername: authorUsername },
        });
      } catch (e) {
        console.log(e.message);
        dispatch({ type: 'comments/load-error' });
      }
    };
  },
};
