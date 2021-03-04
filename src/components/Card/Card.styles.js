import styled from 'styled-components';

export const CardStyled = styled.div`
  background: ${({ theme }) => theme.cardColor};
  transition: transform 100ms;
  width: 350px;
  margin: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  img {
    max-width: 100%;
  }
  div {
    padding: 1rem;
    h1 {
      margin-bottom: 1rem;
      font-size: 1.5em;
    }
  }
`;
