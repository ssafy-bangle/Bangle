import Image from 'next/image';
import { useState, useEffect } from 'react';
import * as S from '@src/styles/pageStyles/mypage/index.styled';
import { DarkMunzi, Munzi1, Munzi2, Munzi3 } from '@src/assets/imgs';
import Munzibtn from '@src/components/molecules/munzibtn';
import Button from '@src/components/atoms/button';
import PageTitle from '@src/components/atoms/pageTitle';
import { UserInfoState, UserModeState } from '@src/modules/user';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Popover } from 'antd';
import Input from '@src/components/atoms/input';
import { paymentApi, userApi } from '@src/apis';
import { useRouter } from 'next/router';
import { UserInfo } from '@src/types/user';

export type munziLogReqProps = {
  createdAt: string;
  amount: number;
};

export default function Mypage() {
  const router = useRouter();
  const [recoilUserInfo, setRecoilUserInfo] = useRecoilState(UserInfoState);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    nickname: '',
    dust: 0,
    email: '',
    roles: 'ROLE_USER',
    userId: '',
  });
  const { roles } = userInfo;
  const [nickname, setNickname] = useState<string>(userInfo.nickname);

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [mode, setMode] = useRecoilState(UserModeState);
  const [open, setOpen] = useState<boolean>(false);
  const [munziLog, setMunziLog] = useState<munziLogReqProps[]>([]);

  const hide = () => {
    setOpen(false);
  };

  useEffect(() => {
    setUserInfo(recoilUserInfo);
  }, []);

  useEffect(() => {
    setRecoilUserInfo(userInfo);
  }, [userInfo]);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    console.log('useInfo', userInfo);
    console.log('mode', mode);
  }, [userInfo, mode]);

  const setNicknameChange = (nickname: string) => {
    isClicked && (setUserInfo({ ...userInfo, nickname: nickname }), userApi.putMemberNickname(nickname));
    setIsClicked((pre) => !pre);
  };

  const setRoleChange = () => {
    setUserInfo({ ...userInfo, roles: 'ROLE_AUTHOR' });
    userApi.putMemberRolesToAuthor();
    setMode('author');
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUserInfo({
      nickname: '',
      dust: 0,
      email: '',
      roles: 'ROLE_USER',
      userId: '',
    });
    router.push('/');
  };

  const chargeDustImmediately = (price: number) => {
    if (price) {
      paymentApi.postPayment(price).then(() => {
        alert(`${price} 먼지 충전이 완료되었습니다`);
        setUserInfo({ ...userInfo, dust: userInfo.dust + price });
      });
    }
  };

  const getDustChargeList = () => {
    paymentApi.getPayment().then((res) => {
      const first10Items = res.data.slice(0, 10);
      setMunziLog([...first10Items]);
    });
  };

  const dateFormater = (date: string) => {
    const createdAt = new Date(date);
    const year = createdAt.getFullYear();
    const month = String(createdAt.getMonth() + 1).padStart(2, '0');
    const day = String(createdAt.getDate()).padStart(2, '0');
    const hours = String(createdAt.getHours()).padStart(2, '0');
    const minutes = String(createdAt.getMinutes()).padStart(2, '0');
    const time = `${hours} : ${minutes}`;
    return { year, month, day, time };
  };

  const popContent = (
    <div>
      <div style={{ fontSize: '1rem', color: 'var(--BG_GRAY2)' }}>최근 10번의 충전 내역만 볼 수 있어요</div>
      {munziLog.map((log: munziLogReqProps, index: number) => (
        <div key={log.createdAt}>
          {index === 0 || dateFormater(log.createdAt).day !== dateFormater(munziLog[index - 1].createdAt).day ? (
            <div style={{ fontWeight: '700', margin: '1rem 0' }}>{dateFormater(log.createdAt).day}일</div>
          ) : null}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 1.2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--BG_GRAY3)', fontWeight: '700' }}>
              <Image width={20} src={DarkMunzi} alt="먼지" style={{ marginRight: '4px' }} />
              {log.amount}
            </div>
            <div style={{ color: 'var(--BG_GRAY2)' }}>{dateFormater(log.createdAt).time}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <S.Container>
      <PageTitle>마이페이지</PageTitle>
      <S.SectionContainer>
        <S.LeftSection>
          <S.PartTitle>내 정보</S.PartTitle>
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
            <Button length={'medium'} icon="mode" content="작가되기 신청" onClick={setRoleChange} />
          ) : mode === 'user' ? (
            <Button length={'medium'} icon="mode" content="작가모드로 보기" onClick={() => setMode('author')} />
          ) : (
            <Button length={'medium'} icon="mode" content="독자모드로 보기" onClick={() => setMode('user')} />
          )}
          <S.Logout onClick={handleLogout}>로그아웃</S.Logout>
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
              <Popover
                content={popContent}
                title="먼지 충전 내역"
                trigger="click"
                open={open}
                style={{ width: '30rem', padding: '2rem' }}
                placement="bottomRight"
                onOpenChange={handleOpenChange}>
                <Button length={'short'} theme={'line'} content="내역보기" onClick={getDustChargeList} />
              </Popover>
            </S.MunziPart>
            <S.PartTitle>충전하기</S.PartTitle>
          </S.RightTopSection>
          <S.RightBottomSection>
            <S.RightBottomLeftSection>
              <S.PartTitle>먼지뭉치</S.PartTitle>
              <Image src={Munzi1} width={276} alt="munzi1Img" onClick={() => chargeDustImmediately(55)} />
              <Image
                src={Munzi2}
                width={276}
                alt="munzi2Img"
                style={{ marginTop: '8px' }}
                onClick={() => chargeDustImmediately(110)}
              />
            </S.RightBottomLeftSection>
            <S.RightBottomRightSection>
              <S.PartTitle>개별 먼지</S.PartTitle>
              <S.MunziBtnContainer>
                <Image src={Munzi3} width={250} alt="munzi3Img" />
                <Munzibtn price={1} content="￦1,000" onClick={() => chargeDustImmediately(1)} />
                <Munzibtn price={5} content="￦5,000" onClick={() => chargeDustImmediately(5)} />
                <Munzibtn price={10} content="￦10,000" onClick={() => chargeDustImmediately(10)} />
                <Munzibtn price={20} content="￦20,000" onClick={() => chargeDustImmediately(20)} />
              </S.MunziBtnContainer>
            </S.RightBottomRightSection>
          </S.RightBottomSection>
        </S.RightSection>
      </S.SectionContainer>
    </S.Container>
  );
}
