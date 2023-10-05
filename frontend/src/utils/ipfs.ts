import axios from "axios";
import cryptography from "./cryptography";
import CryptoJS from "crypto-js";
import apiInstance from "@src/apis/client";

function byteArrayToWordArray(ba: Uint8Array) {
	var wa:number[] = []
	for (let i = 0; i < ba.length; i++) {
		wa[(i / 4) | 0] |= ba[i] << (24 - 8 * i);
	}

	return CryptoJS.lib.WordArray.create(wa, ba.length);
}

const downloadBookFile = (userPW:string, address: string) => {
	console.log("pw", userPW)
	return apiInstance().get(
		'/bookshelf/ipfs/' + address)
	// return axios({
	// 	// url: 'https://j9a501.p.ssafy.io/ipfs/' + address,
	// 	url: 'http://j9a501.p.ssafy.io:8080/ipfs/' + address,
	// 	method: "GET",
	// 	responseType: "blob"
	// })
	.then((res) => {
		console.log("download: ", res)
		const blob = new Blob([res.data.data])
		// need user input to pw
		return cryptography.deriveAESkey(userPW)
			.then((aesKey) => {
				const cryptoJsKey = byteArrayToWordArray(aesKey)
				const newIv = byteArrayToWordArray(aesKey.subarray(0, 16))
				return blob.arrayBuffer()
					.then((ipfsArrayBuffer) => {
						const ipfsUintArray = new Uint8Array(ipfsArrayBuffer)
						const decoder = new TextDecoder()
						const decrypted = CryptoJS.AES.decrypt(decoder.decode(ipfsUintArray), cryptoJsKey, 
							{mode: CryptoJS.mode.CBC, iv: newIv, padding: CryptoJS.pad.Pkcs7})
						return decrypted.toString(CryptoJS.enc.Base64);
					})
			})
	})
	.catch((e)=>{
		console.log(e)
		return "";
	})
}

const ipfs = {downloadBookFile}
export default ipfs