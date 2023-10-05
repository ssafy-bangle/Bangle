import styled from 'styled-components';
import { Alert } from 'antd';

export const StyledAlert = styled(Alert)`
  width: 400px;
  position: absolute;
  top: 100px;
  left: 550px;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 400px;
  position: absolute;
  top: 100px;
  left: 550px;
  z-index: 1000;
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
