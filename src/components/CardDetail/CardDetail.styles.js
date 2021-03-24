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
    overflow: hidden;
    h1 {
      margin-bottom: 1rem;
      font-size: 1em;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
  }
  @media only screen and (min-width: 1000px) {
    max-height: 8rem;
    p {
      font-size: 0.8em;
    }
  }
  @media only screen and (max-width: 999px) {
    max-height: 12rem;
  }
`;
