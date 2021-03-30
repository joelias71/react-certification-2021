import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 6rem;
  height: calc(100vh - 8rem);
  padding: 1rem;
  @media only screen and (max-width: 899px) {
    display: block;
  }
  @media only screen and (min-width: 900px) {
    display: flex;
  }
`;

export const SelectedVideo = styled.div`
  h1,
  p {
    margin: 1rem;
  }
  iframe {
    max-width: 100%;
  }
  svg {
    margin-left: 1rem;
    cursor: pointer;
  }
  background: ${({ theme }) => theme.cardColor};
  @media only screen and (max-width: 899px) {
    width: 100%;
    margin-bottom: 1rem;
    p {
      padding-bottom: 2rem;
    }
    iframe {
      display: block;
      border-style: none;
      width: 100%;
      height: 40vh;
    }
  }
  @media only screen and (min-width: 900px) {
    padding: 1rem;
    width: 70%;
    iframe {
      border-style: none;
      width: 100%;
      height: 60%;
    }
  }
`;

export const ListOfVideos = styled.div`
  overflow-y: scroll;
  @media only screen and (max-width: 899px) {
    width: 100%;
  }
  @media only screen and (min-width: 900px) {
    width: 30%;
    padding: 1rem;
  }
`;
