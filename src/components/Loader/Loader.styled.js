import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  transform: translate(45%, 50%);
`;