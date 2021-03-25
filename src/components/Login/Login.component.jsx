import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Fab from '@material-ui/core/Fab';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../providers/Auth';
import { Login, InputUsername, InputPassword } from './Login.styles';

function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return ReactDOM.createPortal(
    <Login>
      <ToastContainer autoClose={2000} style={{ backgroundColor: 'red' }} />
      <form>
        <h1>Login</h1>
        <InputUsername value={username} onChange={(e) => setUsername(e.target.value)} />
        <InputPassword value={password} onChange={(e) => setPassword(e.target.value)} />
        <Fab
          variant="extended"
          aria-label="Login"
          onClick={() => {
            try {
              login(username.trim(), password.trim());
            } catch {
              toast.error('Oops, you have an invalid username or password');
            }
          }}
        >
          Login
        </Fab>
      </form>
    </Login>,
    document.getElementById('portal')
  );
}

export default LoginPage;
