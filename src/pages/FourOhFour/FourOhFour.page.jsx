import React from 'react';
import Fab from '@material-ui/core/Fab';
import { useHistory } from 'react-router-dom';
import { NotFound } from './FourOhFour.styles';

function FourOhFour() {
  const history = useHistory();

  return (
    <NotFound>
      <div>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Fab variant="extended" aria-label="Log out" onClick={() => history.push('/')}>
          Go to Home
        </Fab>
      </div>
    </NotFound>
  );
}

export default FourOhFour;
