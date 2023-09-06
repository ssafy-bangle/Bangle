import * as S from './index.styled';
import Input from '@src/components/atoms/input';
import PasswordCheck from '@src/components/molecules/password_check';
import Checkbox from '@src/components/atoms/checkbox';
import Button from '@src/components/atoms/button';
import userApi from '@src/apis/user';
import { useEffect, useState } from 'react';
import { privateToPublic } from '@ethereumjs/util';

export default function SignOrSend(mode: string) {
	// states from children
	const [nickname, setNickname] = useState<string>("")
	const [isAuthor, setIsAuthor] = useState<boolean>(false)
	const [isKeyValid, setIsKeyValid] = useState<boolean>(false)
	const [privateKey, setPrivateKey] = useState<Uint8Array>()

	// state from HERE
	const [isButtonActive, setIsButtonActive] = useState<boolean>(false)
	const isSendMode = mode === "send" ? true : false


	useEffect(() => {
		if (nickname !== "" && isKeyValid && privateKey !== undefined) {
			setIsButtonActive(true)
		} else {
			setIsButtonActive(false)
		}
	}, [nickname, isKeyValid, privateKey])

	const complete = () => {
		if (isSendMode) {
			send()
		} else {
			sign()
		}
	}

	const send = () => {
		// send public key to server
		if (privateKey) {
			const publicKey = Array.from(new Uint8Array(privateToPublic(privateKey)))
			.map(b => b.toString(16).padStart(2, "0"))
			.join("")
			// reset privateKey to undefined for security
			setPrivateKey(undefined)
			userApi.postPublicKey(nickname, publicKey)
		}
	}
	const sign = () => {
		// sign smart contracts to polygon network
	}


	return (
		<>
			{ isSendMode &&
				<>
					<div>로고</div>
					<div>방글시작하기</div>
					<p>거의 다왔어요! 개인 지갑을 만들기 위한 비밀번호와 방글에서 사용할 닉네임을 입력해주세요.
					</p>
					<p>비밀번호는 저장되지 않기 때문에 분실 시 찾을 수 없습니다.</p>
					<Input placeholder='닉네임' setInput={setNickname}></Input>
				</>
			}

			<PasswordCheck setIsKeyValid={setIsKeyValid} setPrivateKey={setPrivateKey}></PasswordCheck>

			{ isSendMode && 
				<Checkbox placeholder='작가인가요?' setInput={setIsAuthor}></Checkbox>
			}

			<Button length='short' size='small' content='시작하기' active={isButtonActive} onClick={complete}></Button>
		</>
	);
}
