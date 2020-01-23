import React from 'react';
import { Div, H2, Button } from 'styled-system-html';

import { useStateValue, actions } from '../../state';

export default () => {
  const [{ todos }, d] = useStateValue();
  return (
    <Div width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      {todos.list.map((todo, index) => (
        <Div width="100%" display="flex" justifyContent="space-between" marginTop="10px" key={index}>
          <H2>{todo}</H2>
          <Div>
            <Button padding="10px" marginRight="10px" onClick={() => actions.selectTodo(d, { index, todo })}>
              Edit
            </Button>
            <Button bg="red" color="white" padding="10px" onClick={() => actions.deleteTodo(d, index)}>
              Delete
            </Button>
          </Div>
        </Div>
      ))}
    </Div>
  );
};
