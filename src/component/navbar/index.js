import React from 'react';
import { Header, H1, Button, Div } from 'styled-system-html';

export default ({ title, auth }) => {
  return (
    <Header width="100%" display="flex" justifyContent="space-between" alignItems="center">
      <H1 textAlign="center" flex="1">
        {title}
      </H1>
      <Div>
        {!auth && (
          <>
            <Button padding="10px" marginRight="10px" onClick={() => {}}>
              Login
            </Button>
            <Button padding="10px" onClick={() => {}}>
              Register
            </Button>
          </>
        )}
        {auth && (
          <>
            <Button padding="10px" marginRight="10px" onClick={() => {}}>
              Profile
            </Button>
            <Button padding="10px" onClick={() => {}}>
              Logout
            </Button>
          </>
        )}
      </Div>
    </Header>
  );
};
