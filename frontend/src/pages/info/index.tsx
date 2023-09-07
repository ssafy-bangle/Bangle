import Nav from '@src/components/molecules/nav';
import SignOrSend from '@src/components/organism/sign_or_send';

export default function Info() {
  return (
    <>
			<SignOrSend mode={'send'} />
			회원을 가입하는 페이지
    </>
  );
}
