import React from 'react';
import { Div } from 'styled-system-html';

import Navbar from './component/navbar';
import Todos from './component/todos';
import NewTodo from './component/newTodo';

import { StateProvider } from './state';

function App() {
  return (
    <StateProvider>
      <Div width="762px" margin="auto">
        <Div display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Navbar title="Todo List!" />
          <NewTodo />
          <Todos />
        </Div>
      </Div>
    </StateProvider>
  );
}

export default App;
