import Image from 'next/image';
import styled from 'styled-components';

export const BannerSection = styled.div`
  margin-bottom: 6rem;
`;

export const ContainerBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 28rem;
  background: linear-gradient(170deg, rgba(88, 176, 246, 1) 0%, rgba(144, 198, 236, 1) 100%);
  border-radius: 1.2rem;
  position: relative;
  cursor: pointer;
`;

export const BannerTitle = styled.div`
  line-height: normal;
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--BG_BLACK);
`;

export const ImageBanner = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  top: 200px;
  left: 74px;
`;

export const InnerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: 100%;
  top: 0;
  padding: 3.7rem 4.9rem;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const BannerContent = styled.div`
  line-height: normal;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--BG_GRAY3);
`;

export const BookBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;

  & > img {
    margin: auto;
  }
`;

export const RecommendSection = styled.div`
  margin-bottom: 6rem;
`;

export const BooksBox = styled.div`
  width: inherit;
  height: 140px;
  overflow: hidden;
`;

export const Title = styled.div`
  color: var(--BG_WHITE);
  font-size: 2.8rem;
  font-weight: 700;
  padding: 0 0 3rem 0;

  & > strong {
    color: var(--BG_MAIN);
  }
`;
