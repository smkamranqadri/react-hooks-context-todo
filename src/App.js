import React, { useState, createContext } from 'react';
import { Div } from 'styled-system-html';

import Navbar from './component/navbar';
import Todos from './component/todos';
import NewTodo from './component/newTodo';

export const AppContext = createContext();

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2']);
  const [selectTodoIndex, setSelectedTodoIndex] = useState(null);

  const addTodo = (todo, setTodo) => {
    if (selectTodoIndex !== null) {
      todos[selectTodoIndex] = todo;
      setTodos([...todos]);
    } else {
      setTodos([...todos, todo]);
    }
    setTodo('');
  };

  const editTodo = index => {
    setSelectedTodoIndex(index);
  };

  const deleteTodo = index => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <AppContext.Provider value={{ todos, auth: false }}>
      <Div width="762px" margin="auto">
        <Div display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Navbar title="Todo List!" />
          <NewTodo oldTodo={todos[selectTodoIndex]} addTodo={addTodo} />
          <Todos editTodo={editTodo} deleteTodo={deleteTodo} />
        </Div>
      </Div>
    </AppContext.Provider>
  );
}

export default App;
