import React from 'react';
import { Div, H2, Button } from 'styled-system-html';

import { AppContext } from '../../App';

export default ({ editTodo, deleteTodo }) => {
  return (
    <AppContext.Consumer>
      {({ todos }) => (
        <Div width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          {todos.map((todo, index) => (
            <Div width="100%" display="flex" justifyContent="space-between" marginTop="10px" key={index}>
              <H2>{todo}</H2>
              <Div>
                <Button padding="10px" marginRight="10px" onClick={() => editTodo(index)}>
                  Edit
                </Button>
                <Button bg="red" color="white" padding="10px" onClick={() => deleteTodo(index)}>
                  Delete
                </Button>
              </Div>
            </Div>
          ))}
        </Div>
      )}
    </AppContext.Consumer>
  );
};
