import styled from 'styled-components';
import { Upload } from 'antd';

export const Container = styled.div`
  width: 64.8rem;
`;
export const IconContainer = styled.div`
  display: flex;

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
  width: 8.4rem;

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

export const Genre = styled.span`
  margin-left: auto;
  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
  padding-bottom: 1.7rem;
`;

export const Textarea = styled.textarea`
  width: 56.4rem;
  height: 21.7rem;
  background-color: transparent;
  border-radius: 1.2rem;
  color: var(--BG_GRAY2);
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1rem;

  &::placeholder {
    color: var(--BG_GRAY2);
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1rem;
  }
`;
