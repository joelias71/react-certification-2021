import styled from 'styled-components';

export const InputUsername = styled.input.attrs({
  type: 'text',
  placeholder: 'Username',
})`
  background: none;
  border: none;
  color: #fff;
`;

export const InputPassword = styled.input.attrs({
  type: 'password',
  placeholder: 'Password',
})`
  background: none;
  border: none;
  color: #fff;
`;

export const Login = styled.div`
  width: 100%;
  height: 100vh;
  form {
    background: ${({ theme }) => theme.background};
    padding: 2rem;
    @media only screen and (min-width: 600px) {
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 22rem;
      margin: 0 auto;
    }
    @media only screen and (max-width: 599px) {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    h1 {
      text-align: center;
      margin-bottom: 1rem;
    }
    input {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1.2em;
      border-bottom: 2px solid white;
      height: 2.5rem;
      &:focus {
        outline: none;
      }
    }
    button {
      margin: 0 auto;
      display: block;
    }
  }
`;
