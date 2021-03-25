import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function FourOhFour() {
  const history = useHistory();

  return (
    <main>
      <div className="Container">
        <div className="fourOhFour">
          <h1>404</h1>
          <p>Page Not Found</p>
          <Button onClick={() => history.push('/')}>Go to Electronics</Button>
        </div>
      </div>
    </main>
  );
}

export default FourOhFour;
