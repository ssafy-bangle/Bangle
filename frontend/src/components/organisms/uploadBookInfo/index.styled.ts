import styled from 'styled-components';
import { Upload } from 'antd';

export const Container = styled.div`
  width: 64.8rem;
  ::placeholder {
    color: var(--BG_GRAY3);
  }
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;

  & > .ant-upload-text {
    color: var(--BG_GRAY2) !important;
    font-size: 1.4rem !important;
    font-weight: 400 !important;
  }
`;

export const InputTitle = styled.div`
  color: var(--BG_GRAY1);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 4.7rem;

  & > strong {
    color: var(--BG_POINT);
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const UploadTitle = styled(InputTitle)`
  width: auto;
  height: auto;
`;

export const UploaderContainer = styled.div`
  width: 64.8rem;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  width: 31.1rem;
  gap: 1rem;
`;
export const Genre = styled.div`
  gap: 2.4rem;
  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.7rem;
`;

export const Textarea = styled.textarea`
  width: 56.4rem;
  height: 21.7rem;
  background-color: transparent;
  border-radius: 1.2rem;
  color: var(--BG_GRAY1);
  border: 1px solid var(--BG_GRAY3);
  border-color: var(--BG_GRAY2);
  font-size: 1.6rem;
  font-weight: 400;
  resize: none;
  padding: 1.4rem 1.6rem 1.4rem 1.6rem;
  &:hover,
  &:focus {
    border-color: var(--BG_MAIN) !important;
    outline: 0;
  }
  &::placeholder {
    color: var(--BG_GRAY3);
  }
`;
