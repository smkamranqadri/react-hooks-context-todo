import React, { useState, useEffect } from 'react';
import { Div, Input, Button } from 'styled-system-html';

import { useStateValue, actions } from '../../state';

export default () => {
  const [todo, setTodo] = useState('');
  const [
    {
      todos: { selected }
    },
    d
  ] = useStateValue();
  const { addTodo, editTodo } = actions;

  useEffect(() => {
    if (selected.todo) setTodo(selected.todo);
  }, [selected]);

  const handleSubmit = () => {
    if (selected.todo) {
      editTodo(d, todo);
    } else {
      addTodo(d, todo);
    }
    setTodo('');
  };

  return (
    <Div display="flex" justifyContent="center">
      <Input bg="yellow" padding="10px" width="300px" border="solid 1px black" value={todo} onChange={e => setTodo(e.target.value)} />
      <Button padding="10px" onClick={handleSubmit}>
        {selected.todo ? 'Save' : 'Add'}
      </Button>
    </Div>
  );
};
