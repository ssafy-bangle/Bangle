import Input from '@src/components/atoms/input';
import * as S from './index.styled';
import Button from '@src/components/atoms/button';
import Checkbox from '@src/components/atoms/checkbox';
import userApi from '@src/apis/user';
import { useEffect, useState } from 'react';
import { privateToPublic } from '@ethereumjs/util';
import { useRouter } from 'next/router';

export default function InfoContent() {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');
  const [isAuthor, setIsAuthor] = useState<boolean>(false);
  const [isKeyValid, setIsKeyValid] = useState<boolean>(false);
  const [privateKey, setPrivateKey] = useState<Uint8Array>();
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const handleOnClick = () => {
    const send = () => {
      if (privateKey) {
        const publicKey = Array.from(new Uint8Array(privateToPublic(privateKey)))
          .map((b) => b.toString(16).padStart(2, '0'))
          .join('');
        setPrivateKey(undefined);
        userApi.postPublicKey(nickname, publicKey);
      }
      // send(); //닉네임과 블록체인 암호키를 같이 보내도록 수정(POST) 그에 대한 응답으로 USERDto 받아와서 전역으로 세팅
    };
    router.push('/home');
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
    if (password === passwordCheck) {
      makeHash(password).then((hashedBuffer) => {
        setPrivateKey(hashedBuffer);
        console.log(
          'hashedBufferPrivateKey: ',
          Array.from(new Uint8Array(hashedBuffer))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join(''),
        );
      });
      setIsKeyValid(true);
    } else {
      setIsKeyValid(false);
    }
  }, [password, passwordCheck]);

  return (
    <>
      <S.Container>
        <Input size={'default'} state={'default'} placeholder={'닉네임'} setInput={setNickname} />
        <Input size={'default'} state={'default'} placeholder={'지갑 비밀번호'} setInput={setPassword} />
        <Input size={'default'} state={'default'} placeholder={'지갑 비밀번호 확인'} setInput={setPasswordCheck} />
        <Checkbox content={'작가인가요?'} setInput={setIsAuthor} />
        <Button theme='default' length={'medium'} content="시작하기" active={isButtonActive} onClick={handleOnClick} />
      </S.Container>
    </>
  );
}
