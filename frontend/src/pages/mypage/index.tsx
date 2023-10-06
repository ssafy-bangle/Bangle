import Image from 'next/image';
import { useState, useEffect } from 'react';
import * as S from '@src/styles/pageStyles/mypage/index.styled';
import { DarkMunzi, Munzi1, Munzi2, Munzi3 } from '@src/assets/imgs';
import Munzibtn from '@src/components/molecules/munzibtn';
import Button from '@src/components/atoms/button';
import PageTitle from '@src/components/atoms/pageTitle';
import { UserInfoState, UserModeState } from '@src/modules/user';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Popover } from 'antd';
import Input from '@src/components/atoms/input';
import { authorApi, paymentApi, userApi } from '@src/apis';
import { UserInfo } from '@src/types/user';
import { useRouter } from 'next/router';
import { AlertOpenState } from '@src/modules/state';
import Swal from 'sweetalert2';

export type munziLogReqProps = {
  createdAt: string;
  amount: number;
};

export default function Mypage() {
  const router = useRouter();
  const [recoilUserInfo, setRecoilUserInfo] = useRecoilState(UserInfoState);
  const [introduction, setIntroduction] = useState<string>('');
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
  const setIsOpenAlert = useSetRecoilState(AlertOpenState);

  const hide = () => {
    setOpen(false);
  };

  useEffect(() => {
    setUserInfo(recoilUserInfo);
  }, []);

  useEffect(() => {
    setRecoilUserInfo(userInfo);
  }, [userInfo]);

  useEffect(() => {
    userInfo.roles === 'ROLE_AUTHOR' &&
      mode === 'author' &&
      authorApi.getAuthorMyInfo().then((res) => setIntroduction(res.data.introduction));
  }, [userInfo, mode]);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const setNicknameChange = (nickname: string) => {
    isClicked &&
      (setUserInfo({ ...userInfo, nickname: nickname }),
      userApi.putMemberNickname(nickname).catch(() => {
        setIsOpenAlert(true);
      }));
    setIsClicked((pre) => !pre);
  };

  const setRoleChange = () => {
    setUserInfo({ ...userInfo, roles: 'ROLE_AUTHOR' });
    userApi
      .putMemberRolesToAuthor()
      .then(() =>
        Swal.fire({
          title: '전환 완료',
          text: `작가로 전환이 완료되었습니다`,
          confirmButtonColor: '#2cc295',
        }),
      )
      .catch(() => {
        setIsOpenAlert(true);
      });
    setMode('author');
  };

  const chargeDustImmediately = (price: number) => {
    if (price) {
      paymentApi
        .postPayment(price)
        .then(() => {
          Swal.fire({
            title: '충전 완료',
            text: `${price} 먼지 충전이 완료되었습니다`,
            confirmButtonColor: '#2cc295',
          });
          setUserInfo({ ...userInfo, dust: userInfo.dust + price });
        })
        .catch(() => {
          setIsOpenAlert(true);
          Swal.fire({
            title: '충전 실패',
            text: '충전 중 오류가 발생했습니다.',
            confirmButtonColor: '#2cc295',
          });
        });
    }
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
    Swal.fire({
      title: '로그아웃',
      text: '로그아웃 되었습니다.',
      confirmButtonColor: '#2cc295',
    });
    router.push('/');
  };

  const getDustChargeList = () => {
    paymentApi
      .getPayment()
      .then((res) => {
        const first10Items = res.data.slice(0, 10);
        setMunziLog([...first10Items]);
      })
      .catch(() => {
        setIsOpenAlert(true);
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

  const handleIntroductionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authorApi.postIntroduction(introduction);
    Swal.fire({
      title: '등록 완료',
      text: '작가 소개가 등록 되었습니다',
      confirmButtonColor: '#2cc295',
    });
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
          {roles === 'ROLE_AUTHOR' && mode === 'author' && (
            <form onSubmit={handleIntroductionSubmit}>
              <S.StyledInput
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                placeholder={introduction === '' ? '작가 소개를 입력해주세요' : `${introduction}`}
              />
            </form>
          )}
          {roles === 'ROLE_USER' ? (
            <Button length={'medium'} icon="mode" content="작가되기 신청" onClick={setRoleChange} />
          ) : mode === 'user' ? (
            <Button
              length={'medium'}
              icon="mode"
              content="작가모드로 보기"
              onClick={() => (
                setMode('author'),
                Swal.fire({
                  title: '전환 완료',
                  text: '작가 모드로 전환되었습니다.',
                  confirmButtonColor: '#2cc295',
                })
              )}
            />
          ) : (
            <Button
              length={'medium'}
              icon="mode"
              content="독자모드로 보기"
              onClick={() => (
                setMode('user'),
                Swal.fire({
                  title: '전환 완료',
                  text: '독자 모드로 전환되었습니다.',
                  confirmButtonColor: '#2cc295',
                })
              )}
            />
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
              <Image
                id="hover"
                src={Munzi1}
                layout="responsive"
                width={276}
                alt="munzi1Img"
                style={{ cursor: 'pointer' }}
                onClick={() => chargeDustImmediately(55)}
              />
              <Image
                id="hover"
                src={Munzi2}
                width={276}
                alt="munzi2Img"
                layout="responsive"
                style={{ marginTop: '8px', cursor: 'pointer' }}
                onClick={() => chargeDustImmediately(110)}
              />
            </S.RightBottomLeftSection>
            <S.RightBottomRightSection>
              <S.PartTitle>개별 먼지</S.PartTitle>
              <S.MunziBtnContainer>
                <Image
                  src={Munzi3}
                  width={250}
                  alt="munzi3Img"
                  style={{ cursor: 'pointer' }}
                  layout="responsive"
                  onClick={() => {
                    Swal.fire({
                      title: '준비중',
                      text: '추후 업데이트 될 예정입니다.',
                      confirmButtonColor: '#2cc295',
                    });
                  }}
                />
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
