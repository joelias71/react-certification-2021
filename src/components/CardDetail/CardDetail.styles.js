import styled from 'styled-components';

export const CardDetailStyled = styled.div`
  background: ${({ theme }) => theme.cardColor};
  transition: transform 100ms;
  width: 100%;
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 30%;
    height: auto;
  }
  div {
    padding: 1rem;
    h1 {
      margin-bottom: 1rem;
      font-size: 1em;
    }
  }
  @media only screen and (min-width: 1000px) {
    p {
      font-size: 0.8em;
    }
  }
`;
