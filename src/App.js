import React, { useState } from 'react';
import { Div } from 'styled-system-html';

import Navbar from './component/navbar';
import Todos from './component/todos';
import NewTodo from './component/newTodo';

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
    <Div width="762px" margin="auto">
      <Div display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Navbar title="Todo List!" />
        <NewTodo oldTodo={todos[selectTodoIndex]} addTodo={addTodo} />
        <Todos todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
      </Div>
    </Div>
  );
}

export default App;
