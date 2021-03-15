import styled from 'styled-components';

export const ContainerList = styled.div`
  min-height: calc(100vh - 6rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  #errorMsg {
    font-size: 2em;
    line-height: calc(100vh - 6rem);
  }
`;
