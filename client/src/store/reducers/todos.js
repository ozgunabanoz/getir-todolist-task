import * as actionTypes from './../actions/actionTypes';

const initialState = {
  todos: null,
  clickedTodo: null
};

const fetchTodos = (state, action) => {
  return {
    ...state,
    todos: action.todos
  };
};

const clickTodo = (state, action) => {
  return {
    ...state,
    clickedTodo: action.clickedTodo
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS:
      return fetchTodos(state, action);
    case actionTypes.CLICK_TODO:
      return clickTodo(state, action);
    default:
      return state;
  }
};

export default reducer;
