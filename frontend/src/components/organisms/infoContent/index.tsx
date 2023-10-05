import Input from '@src/components/atoms/input';
import * as S from './index.styled';
import Button from '@src/components/atoms/button';
import Checkbox from '@src/components/atoms/checkbox';
import userApi from '@src/apis/user';
import { useEffect, useState } from 'react';
import { privateToPublic } from '@ethereumjs/util';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { UserInfoState, UserModeState } from '@src/modules/user';

export default function InfoContent() {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');
  const [isAuthor, setIsAuthor] = useState<boolean>(false);
  const [isKeyValid, setIsKeyValid] = useState<boolean>(false);
  const [privateKey, setPrivateKey] = useState<Uint8Array>();
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const setMode = useSetRecoilState(UserModeState);
  const handleOnClick = async () => {
    if (privateKey) {
      const publicKey = Array.from(new Uint8Array(privateToPublic(privateKey)))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
      setPrivateKey(undefined);
      setUserInfo({ ...userInfo, nickname: nickname, roles: isAuthor ? 'ROLE_AUTHOR' : 'ROLE_USER' });
      setMode(isAuthor ? 'author' : 'user');
      await userApi.postMemberInfo(nickname, publicKey, isAuthor ? 'ROLE_AUTHOR' : 'ROLE_USER');
      router.push('/home');
    }
  };

  const makeHash = async (password: string) => {
    const encodedPassword = new TextEncoder().encode(password);
    const hashedBuffer = await crypto.subtle.digest('SHA-256', encodedPassword);
    return new Uint8Array(hashedBuffer);
  };

  useEffect(() => {
    setIsButtonActive(
      nickname !== '' && password !== '' && passwordCheck !== '' && isKeyValid && privateKey !== undefined
        ? true
        : false,
    );
  }, [nickname, isKeyValid, privateKey]);

  useEffect(() => {
    if (password === passwordCheck && password.length >= 8) {
      makeHash(password).then((hashedBuffer) => {
        setPrivateKey(hashedBuffer);
      });
      setIsKeyValid(true);
    } else {
      setIsKeyValid(false);
    }
  }, [password, passwordCheck]);

  const recoilNickname = '현재 닉네임: ' + useRecoilValue(UserInfoState).nickname;

  return (
    <>
      <S.Container>
        <Input size={'default'} state={'default'} placeholder={recoilNickname} setInput={setNickname} />
        <Input size={'default'} state={'default'} placeholder={'지갑 비밀번호(8자 이상)'} setInput={setPassword} />
        <Input size={'default'} state={'default'} placeholder={'지갑 비밀번호 확인'} setInput={setPasswordCheck} />
        <S.CheckBoxContainer>
          <Checkbox content={'작가인가요?'} setInput={setIsAuthor} />
        </S.CheckBoxContainer>
        <Button theme="default" length={'medium'} content="시작하기" active={isButtonActive} onClick={handleOnClick} />
      </S.Container>
    </>
  );
}
