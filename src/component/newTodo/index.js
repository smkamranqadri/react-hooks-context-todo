import React, { useState, useEffect } from 'react';
import { Div, Input, Button } from 'styled-system-html';

export default ({ addTodo, oldTodo }) => {
  const [todo, setTodo] = useState('');
  
  useEffect(() => {
    setTodo(oldTodo || '');
  }, [oldTodo])

  return (
    <Div display="flex" justifyContent="center">
      <Input bg="yellow" padding="10px" width="300px" border="solid 1px black" value={todo} onChange={e => setTodo(e.target.value)} />
      <Button padding="10px" onClick={() => addTodo(todo, setTodo)}>
        {oldTodo ? 'Save' : 'Add'}
      </Button>
    </Div>
  );
};
