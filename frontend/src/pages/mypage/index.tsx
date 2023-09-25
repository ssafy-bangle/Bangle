import Image from 'next/image';
import { useState, useEffect } from 'react';
import * as S from '@src/styles/pageStyles/mypage/index.styled';
import { DarkMunzi, Munzi1, Munzi2, Munzi3 } from '@src/assets/imgs';
import Munzibtn from '@src/components/molecules/munzibtn';
import Button from '@src/components/atoms/button';
import PageTitle from '@src/components/atoms/pageTitle';
import { UserInfoState } from '@src/modules/user';
import { useRecoilState } from 'recoil';
import Input from '@src/components/atoms/input';

export default function Mypage() {
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const { roles } = userInfo;
  const [nickname, setNickname] = useState<string>(userInfo.nickname);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    console.log('useInfo', userInfo);
  });

  const setNicknameChange = (nickname: string) => {
    isClicked && setUserInfo({ ...userInfo, nickname: nickname });
    setIsClicked((pre) => !pre);
  };

  const setRoleChange = () => {
    setUserInfo(roles === 'ROLE_AUTHOR' ? { ...userInfo, roles: 'ROLE_USER' } : { ...userInfo, roles: 'ROLE_AUTHOR' });
  };

  return (
    <S.Container>
      <PageTitle>마이페이지</PageTitle>
      <S.SectionContainer>
        <S.LeftSection>
          <S.NicknamePart>
            <S.MainInfo>
              {isClicked ? (
                <Input
                  size="short"
                  state="default"
                  placeholder={userInfo.nickname}
                  value={nickname}
                  setInput={setNickname}
                />
              ) : (
                <strong>{userInfo.nickname} 님</strong>
              )}
            </S.MainInfo>
            <Button
              length={'short'}
              theme={'line'}
              content={isClicked ? '완료' : '수정하기'}
              onClick={() => setNicknameChange(nickname)}
            />
          </S.NicknamePart>
          {roles === 'ROLE_AUTHOR' && <S.StyledInput placeholder="작가 소개를 입력해주세요"></S.StyledInput>}
          {roles === 'ROLE_USER' ? (
            <Button length={'medium'} icon="mode" content="작가모드로 변경" onClick={setRoleChange} />
          ) : (
            <Button length={'medium'} icon="mode" content="독자모드로 변경" onClick={setRoleChange} />
          )}
          <S.Logout onClick={() => {}}>로그아웃</S.Logout>
        </S.LeftSection>
        <S.RightSection>
          <S.RightTopSection>
            <S.PartTitle>보유 먼지</S.PartTitle>
            <S.MunziPart>
              <S.MunziPartLeft>
                <Image src={DarkMunzi} alt="다크먼지" />
                <S.MainInfo>
                  내 먼지 <strong>{userInfo.dust}</strong>개
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
