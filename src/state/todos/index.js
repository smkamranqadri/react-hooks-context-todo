const TODO_ADD_SUCCESS = 'TODO_ADD_SUCCESS';
const TODO_SELECT_SUCCESS = 'TODO_SELECT_SUCCESS';
const TODO_EDIT_SUCCESS = 'TODO_EDIT_SUCCESS';
const TODO_DELETE_SUCCESS = 'TODO_DELETE_SUCCESS';

const addTodo = (dispatch, todo) =>
  dispatch({
    type: TODO_ADD_SUCCESS,
    payload: todo
  });

const selectTodo = (dispatch, index) =>
  dispatch({
    type: TODO_SELECT_SUCCESS,
    payload: index
  });

const editTodo = (dispatch, index) =>
  dispatch({
    type: TODO_EDIT_SUCCESS,
    payload: index
  });

const deleteTodo = (dispatch, index) =>
  dispatch({
    type: TODO_DELETE_SUCCESS,
    payload: index
  });

const initialState = { list: ['Todo 1', 'Todo 2'], selected: { index: null, todo: null } };

const reducer = (state, action) => {
  switch (action.type) {
    case TODO_ADD_SUCCESS:
      return { list: [...state.list, action.payload], selected: state.selected };

    case TODO_SELECT_SUCCESS:
      return { list: [...state.list], selected: action.payload };

    case TODO_EDIT_SUCCESS:
      return { list: [...state.list.map((todo, index) => (index === state.selected.index ? action.payload : todo))], selected: state.selected };

    case TODO_DELETE_SUCCESS:
      return { list: [...state.list.filter((todo, index) => index !== action.payload)], selected: state.selected };

    default:
      return state;
  }
};

export default {
  actions: {
    addTodo,
    selectTodo,
    editTodo,
    deleteTodo
  },
  initialState,
  reducer
};
