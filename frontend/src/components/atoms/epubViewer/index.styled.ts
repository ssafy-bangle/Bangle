import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBackDrop = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  border: 0;
`;

export const Container = styled.div`
  width: 1000px;
  height: 100vh;
  background-color: #021b1a;
`;
