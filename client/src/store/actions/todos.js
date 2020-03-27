import axios from 'axios';

import * as actionTypes from './actionTypes';

export const postTodo = todo => {
  return async dispatch => {
    try {
      await axios.post('/api/post/todos', todo);
      dispatch(getTodos());
    } catch (err) {
      console.log(err);
    }
  };
};

export const getTodos = () => {
  return async dispatch => {
    try {
      let elems = await axios.get('/api/get/todos');

      dispatch(fetchTodos(elems.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchTodos = todos => {
  return {
    type: actionTypes.FETCH_TODOS,
    todos: todos
  };
};

export const changeStatus = todo => {
  return async dispatch => {
    try {
      await axios.patch('/api/change_status/todos', todo);
      dispatch(getTodos());
    } catch (err) {
      console.log(err);
    }
  };
};

export const clickedTodo = todo => {
  return {
    type: actionTypes.CLICK_TODO,
    clickedTodo: todo
  };
};

export const editTodo = todo => {
  return async dispatch => {
    try {
      await axios.patch('/api/edit/todos', todo);
      dispatch(getTodos());
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteTodo = todo => {
  return async dispatch => {
    try {
      await axios.delete('/api/delete/todos', { data: todo });
      dispatch(getTodos());
    } catch (err) {
      console.log(err);
    }
  };
};
