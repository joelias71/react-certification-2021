import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  height: calc(100vh - 8rem);
  padding: 1rem;
  @media only screen and (max-width: 999px) {
    display: block;
  }
  @media only screen and (min-width: 1000px) {
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
  background: ${({ theme }) => theme.cardColor};
  @media only screen and (max-width: 999px) {
    width: 100%;
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
  @media only screen and (min-width: 1000px) {
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
  padding: 1rem;
  overflow-y: scroll;
  @media only screen and (max-width: 999px) {
    width: 100%;
  }
  @media only screen and (min-width: 1000px) {
    width: 30%;
  }
`;
