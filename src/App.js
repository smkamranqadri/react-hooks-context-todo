import React, { useState } from 'react';
import { Div, H1, H2, Input, Button } from 'styled-system-html';

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2']);
  const [todo, setTodo] = useState('');
  const [selectTodoIndex, setSelectedTodoIndex] = useState(null);
  const addTodo = () => {
    if (selectTodoIndex !== null) {
      todos[selectTodoIndex] = todo;
      setTodos([...todos]);
    } else {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };
  const editTodo = (todo, index) => {
    setSelectedTodoIndex(index);
    setTodo(todo);
  };
  return (
    <Div width="762px" margin="auto">
      <Div display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <H1>Todo List!</H1>
        <Div display="flex" justifyContent="center">
          <Input type="text" bg="yellow" padding="10px" width="300px" border="solid 1px black" value={todo} onChange={e => setTodo(e.target.value)} />
          <Button padding="10px" onClick={() => addTodo()}>
            {selectTodoIndex !== null ? 'Save' : 'Add'}
          </Button>
        </Div>
        <Div width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          {todos.map((todo, index) => (
            <Div width="100%" display="flex" justifyContent="space-between" marginTop="10px" key={index}>
              <H2>{todo}</H2>
              <Div>
                <Button padding="10px" marginRight="10px" onClick={() => editTodo(todo, index)}>
                  Edit
                </Button>
                <Button bg="red" color="white" padding="10px" onClick={() => setTodos(todos.filter(item => item !== todo))}>
                  Delete
                </Button>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}

export default App;
