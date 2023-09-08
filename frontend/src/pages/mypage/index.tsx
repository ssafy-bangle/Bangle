import Image from 'next/image';
import * as S from './index.styled.';
import { DarkMunzi, Munzi1, Munzi2, Munzi3 } from '@src/assets/imgs';
import Munzibtn from '@src/components/molecules/munzibtn';
import Button from '@src/components/atoms/button';

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
            <Button length={'short'} size={'small'} theme={'line'} content="수정하기" />
          </S.NicknamePart>
          <Button length={'short'} size={'small'} icon="mode" content="작가모드로 변경" />
          <S.Logout href="/" />
        </S.LeftSection>
        <S.RightSection>
          <S.RightTopSection>
            <S.PartTitle>보유 먼지</S.PartTitle>
            <S.MunziPart>
              <S.MunziPartLeft>
                <Image src={DarkMunzi} alt="다크먼지" />
                <S.MainInfo>
                  내 먼지 <strong>30</strong>개
                </S.MainInfo>
              </S.MunziPartLeft>
              <Button length={'short'} size={'small'} theme={'line'} content="내역보기" />
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
              <S.MunziBtnContainer>
                <Image src={Munzi3} alt="munzi3Img" />
                <Munzibtn price={1} content="￦1,000" />
                <Munzibtn price={5} content="￦5,000" />
                <Munzibtn price={10} content="￦10,000" />
                <Munzibtn price={20} content="￦20,000" />
              </S.MunziBtnContainer>
            </S.RightBottomRightSection>
          </S.RightBottomSection>
        </S.RightSection>
      </S.SectionContainer>
    </S.Container>
  );
}
