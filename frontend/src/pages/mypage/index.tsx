import Image from 'next/image';
import * as S from './index.styled.';
import { DarkMunzi, Munzi1, Munzi2, Munzi3 } from '@src/assets/imgs';
import Munzibtn from '@src/components/molecules/munzibtn';
import Button from '@src/components/atoms/button';
import PageTitle from '@src/components/atoms/pageTitle';
import { UserInfoState } from '@src/modules/user';
import { useRecoilValue } from 'recoil';

export default function Mypage() {
  const { role } = useRecoilValue(UserInfoState);
  return (
    <S.Container>
      <PageTitle>마이페이지</PageTitle>
      <S.SectionContainer>
        <S.LeftSection>
          <S.PartTitle>{role === 'ROLE_USER' ? '독자' : '작가'} 정보</S.PartTitle>

          <S.NicknamePart>
            <S.MainInfo>
              <strong>방글이 님</strong>
            </S.MainInfo>

            <Button length={'short'} theme={'line'} content="수정하기" />
          </S.NicknamePart>
          {role === 'ROLE_AUTHOR' && <S.StyledInput placeholder="작가 소개를 입력해주세요"></S.StyledInput>}
          {role === 'ROLE_USER' ? (
            <Button length={'medium'} icon="mode" content="작가모드로 변경" />
          ) : (
            <Button length={'medium'} icon="mode" content="독자모드로 변경" />
          )}
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
              <Button length={'short'} theme={'line'} content="내역보기" />
            </S.MunziPart>
            <S.PartTitle>충전하기</S.PartTitle>
          </S.RightTopSection>
          <S.RightBottomSection>
            <S.RightBottomLeftSection>
              <S.PartTitle>먼지뭉치</S.PartTitle>
              <Image src={Munzi1} width={270} alt="munzi1Img" />
              <Image src={Munzi2} width={270} alt="munzi2Img" />
            </S.RightBottomLeftSection>
            <S.RightBottomRightSection>
              <S.PartTitle>개별 먼지</S.PartTitle>
              <S.MunziBtnContainer>
                <Image src={Munzi3} width={250} alt="munzi3Img" />
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
