import axios from "axios";
import cryptography from "./cryptography";
import CryptoJS from "crypto-js";

function byteArrayToWordArray(ba: Uint8Array) {
	var wa:number[] = []
	for (let i = 0; i < ba.length; i++) {
		wa[(i / 4) | 0] |= ba[i] << (24 - 8 * i);
	}

	return CryptoJS.lib.WordArray.create(wa, ba.length);
}

const downloadBookFile = (address: string) => {
	axios({
		// url: "http://j9a501.p.ssafy.io:8080/ipfs/" + address,
		url: 'http://localhost:8080/ipfs/QmaJVBxw5CRFqieHhe4EUdt3FutiH154gNh3C5yRMxZuRY', 
		method: "POST",
		responseType: "blob"
	})
	.then((res) => {
		const blob = new Blob([res.data])
		console.log("blobSize: ",blob.size)
		cryptography.deriveAESkey("bangle_user")
			.then((aesKey) => {
				const cryptoJsKey = byteArrayToWordArray(aesKey)
				const newIv = byteArrayToWordArray(aesKey.subarray(0, 16))
				blob.arrayBuffer()
					.then((ipfsArrayBuffer) => {
						const ipfsUintArray = new Uint8Array(ipfsArrayBuffer)
						const decoder = new TextDecoder()
						const decrypted = CryptoJS.AES.decrypt(decoder.decode(ipfsUintArray), cryptoJsKey, 
							{mode: CryptoJS.mode.CBC, iv: newIv, padding: CryptoJS.pad.Pkcs7})
						localStorage.setItem("QmaJVBxw5CRFqieHhe4EUdt3FutiH154gNh3C5yRMxZuRY",
							decrypted.toString(CryptoJS.enc.Base64))
					})
			})
	})
}
const ipfs = {downloadBookFile}
export default ipfs