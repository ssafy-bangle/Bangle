import Image from 'next/image';
import * as S from './index.styled.';
import { Munzi1, Munzi2, Munzi3 } from '@src/assets/imgs';

export default function Mypage() {
  return (
    <S.Container>
      <S.PageTitle>마이페이지</S.PageTitle>
      <S.SectionContainer>
        <S.LeftSection>
          <S.PartTitle>독자 정보</S.PartTitle>
          <S.NicknamePart>
            <S.MainInfo>
              <strong>방글이 님</strong>
            </S.MainInfo>
            {/* 수정하기 button */}
          </S.NicknamePart>
          {/* 작가모드로 변경 button */}
          <S.Logout href="/" />
        </S.LeftSection>
        <S.RightSection>
          <S.RightTopSection>
            <S.PartTitle>보유 먼지</S.PartTitle>
            <S.MunziPart>
              <S.MainInfo>
                내 먼지 <strong>30</strong>개
              </S.MainInfo>
              {/* 내역보기 button */}
            </S.MunziPart>

            <S.PartTitle>충전하기</S.PartTitle>
          </S.RightTopSection>
          <S.RightBottomSection>
            <S.RightBottomLeftSection>
              <S.PartTitle>먼지뭉치</S.PartTitle>
              <Image src={Munzi1} alt="munzi1Img" />
              <Image src={Munzi2} alt="munzi2Img" />
            </S.RightBottomLeftSection>
            <S.RightBottomRightSection>
              <S.PartTitle>개별 먼지</S.PartTitle>
              <Image src={Munzi3} alt="munzi3Img" />
              {/*button */}
              {/*button */}
              {/*button */}
              {/*button */}
            </S.RightBottomRightSection>
          </S.RightBottomSection>
        </S.RightSection>
      </S.SectionContainer>
    </S.Container>
  );
}
