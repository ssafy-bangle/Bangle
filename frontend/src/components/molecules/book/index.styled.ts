import styled from 'styled-components';

export const BookInfo = styled.div`
  cursor: pointer;
  text-align: center;
  font-weight: 500;
  &:hover {
    color: var(--BG_GRAY2);
  }
`;

export const BookTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--BG_GRAY1);
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 0.4rem;
  line-height: 130%;
  cursor: pointer;
`;

// progress 색 변경 어떻게 하죠//?
export const Progress = styled.div`
  margin-top: 0.8rem;
  & > :where(.css-dev-only-do-not-override-190m0jy).ant-progress .ant-progress-text {
    color: var(--BG_GRAY1);
  }
`;
