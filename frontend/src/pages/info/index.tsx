import Nav from '@src/components/molecules/nav';

export default function Info() {

	async function makeHash() {
			const userPw = document.getElementById("pw").value
			console.log("userPW: ", userPw)
		
			const encoder = new TextEncoder();
			const encoded = encoder.encode(userPw)
		
			const hashedBuffer = await crypto.subtle.digest("SHA-256", encoded)
			const byteArray = Array.from(new Uint8Array(hashedBuffer))
			const hashHex = byteArray.map((b) => b.toString(16).padStart(2, "0")).join("")
			console.log(hashHex)
	}


  return (
    <>
			회원을 가입하는 페이지
    </>
  );
}
