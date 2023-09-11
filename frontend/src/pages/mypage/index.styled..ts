import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 13.2rem - 44px);
`;

export const LeftSection = styled.div`
  width: 35%;
`;

export const RightSection = styled.div`
  width: 60%;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RightTopSection = styled.div``;

export const RightBottomSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RightBottomLeftSection = styled.div`
  width: max;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RightBottomRightSection = styled.div`
  margin-left: 3.6rem;
`;

export const NicknamePart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4rem;
`;

export const MunziPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4rem;
`;

export const MunziPartLeft = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const MunziBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.77rem;
`;

export const PageTitle = styled.div`
  color: var(--BG_GRAY3);
  font-size: 2.8rem;
  font-weight: 700;
  padding-bottom: 4rem;
`;

export const PartTitle = styled.div`
  color: var(--BG_GRAY1);
  font-size: 1.6rem;
  font-weight: 700;
  padding-bottom: 1.6rem;
`;

export const MainInfo = styled.div`
  color: var(--BG_WHITE);
  font-size: 3.2rem;
  font-weight: 400;
  & > strong {
    font-weight: 700;
  }
`;

export const Logout = styled(Link)`
  color: var(--BG_GRAY1, #e8e9e9);
  font-size: 2rem;
  font-weight: 700;
  text-decoration-line: underline;
`;
