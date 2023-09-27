import styled from 'styled-components';
import { Upload } from 'antd';

export const Container = styled.div`
  width: 27.8rem !important;
  padding-top: 1.2rem;
`;

export const InputTitle = styled.div`
  color: var(--BG_GRAY1);
  font-size: 1.6rem;
  font-weight: 700;
  padding-bottom: 2.7rem;

  & > strong {
    color: var(--BG_POINT);
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const StyledUpload = styled(Upload)`
  & > .ant-upload-select {
    width: 100% !important;
    height: 37rem !important;
    color: var(--BG_GRAY2);
  }
  &:hover {
    color: var(--BG_MAIN);
  }
`;

export const CheckboxContainer = styled.span`
  display: flex;
  justify-content: center;
  color: var(--BG_GRAY1);
  font-size: 1.6rem;
`;
