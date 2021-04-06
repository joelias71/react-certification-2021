import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Fab from '@material-ui/core/Fab';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { FAVORITE_VIDEOS, AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { useAuth } from '../../providers/Auth';
import { Login, InputUsername, InputPassword } from './Login.styles';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
  const history = useHistory();
  if (storage.get(AUTH_STORAGE_KEY)) {
    history.push('/');
  }
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (storage.get(FAVORITE_VIDEOS) === null) {
      storage.set(FAVORITE_VIDEOS, { listofVideos: [] });
    }
  }, []);

  return ReactDOM.createPortal(
    <Login>
      <ToastContainer />
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
              toast.error('Oops, you have an invalid username or password', {
                autoClose: 3000,
              });
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
