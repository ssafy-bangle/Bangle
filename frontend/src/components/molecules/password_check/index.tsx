import { useEffect, useState } from 'react';
import * as S from './index.styled';
import PasswordInput from '@src/components/atoms/password_input';
import { PasswordCheckProps } from '@src/types/props';

export default function PasswordCheck({ setIsKeyValid, setHashedPassword}: PasswordCheckProps) {
	const [password, setPassword] = useState("")
	const [passwordCheck, setPasswordCheck] = useState("")

	useEffect(() => {
		if (password === passwordCheck) {
			setHashedPassword(makeHash(password))
			setIsKeyValid(true)
		} else {
			setIsKeyValid(false)
		}
	}, [password, passwordCheck])

	const makeHash = async (password: string) => {
		const encodedPassword = new TextEncoder().encode(password)
		const hashedBuffer = await crypto.subtle.digest("SHA-256", encodedPassword)
		return Array.from(new Uint8Array(hashedBuffer))
			.map(b => b.toString(16).padStart(2, "0"))
			.join("");
	}

	return (
		<>
			<PasswordInput
				placeholder="지갑 비밀번호"
				setInput={setPassword}/>
			<PasswordInput 
				placeholder="지갑 비밀번호 확인"
				setInput={setPasswordCheck}/>
		</>
	);
}
