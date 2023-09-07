// import { useEffect, useState } from 'react';
// import * as S from './index.styled';
// import { PasswordCheckProps } from '@src/types/props';
// import Input from '@src/components/atoms/input';

// export default function PasswordCheck({ setIsKeyValid, setPrivateKey }: PasswordCheckProps) {
//   const [password, setPassword] = useState('');
//   const [passwordCheck, setPasswordCheck] = useState('');

//   useEffect(() => {
//     if (password === passwordCheck) {
//       makeHash(password).then((hashedBuffer) => {
//         setPrivateKey(hashedBuffer);
//         console.log(
//           'hashedBufferPrivateKey: ',
//           Array.from(new Uint8Array(hashedBuffer))
//             .map((b) => b.toString(16).padStart(2, '0'))
//             .join(''),
//         );
//       });
//       setIsKeyValid(true);
//     } else {
//       setIsKeyValid(false);
//     }
//   }, [password, passwordCheck]);

//   const makeHash = async (password: string) => {
//     const encodedPassword = new TextEncoder().encode(password);
//     const hashedBuffer = await crypto.subtle.digest('SHA-256', encodedPassword);
//     return hashedBuffer;

//   };

//   return (
//     <>
//       <Input placeholder="지갑 비밀번호" setInput={() => setPassword} />
//       <Input placeholder="지갑 비밀번호 확인" setInput={() => setPasswordCheck} />
//     </>
//   );
// }
