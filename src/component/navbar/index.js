import React from 'react';
import { Header, H1, Button, Div } from 'styled-system-html';

import { useStateValue, actions } from '../../state';

export default ({ title }) => {
  const [{ auth }, dispatch] = useStateValue();

  return (
    <Header width="100%" display="flex" justifyContent="space-between" alignItems="center">
      <H1 textAlign="center" flex="1">
        {title}
      </H1>
      <Div>
        {!auth.isLoggedIn && (
          <>
            <Button padding="10px" marginRight="10px" onClick={() => dispatch(actions.login())}>
              Login
            </Button>
            <Button padding="10px" onClick={() => {}}>
              Register
            </Button>
          </>
        )}
        {auth.isLoggedIn && (
          <>
            <Button padding="10px" marginRight="10px" onClick={() => {}}>
              Profile
            </Button>
            <Button padding="10px" onClick={() => dispatch(actions.logout())}>
              Logout
            </Button>
          </>
        )}
      </Div>
    </Header>
  );
};
