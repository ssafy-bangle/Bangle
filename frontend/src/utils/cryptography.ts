import * as secp from '@noble/secp256k1'
import { pbkdf2 } from '@noble/hashes/pbkdf2'
import { sha256 } from '@noble/hashes/sha256'
import { privateToPublic, publicToAddress } from '@ethereumjs/util'

const makeHash = async (password: string) => {
	const encodedPassword = new TextEncoder().encode(password)
	const hashedBuffer = await crypto.subtle.digest("SHA-256", encodedPassword)
	return new Uint8Array(hashedBuffer)
}

const toHexString = (uintArray: Uint8Array) => {
	return Array.from(new Uint8Array(uintArray))
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('')
}

const toBufferWithPrefix = (hex: string, prefix: number) => {
	const byteLen = hex.length/2
	const prefixLen = prefix === 0 ? 0 : 1
	const bytes = new Uint8Array(prefixLen + byteLen)
	for (var i = 0; i < byteLen; i++) {
		bytes[i + prefixLen] = parseInt(hex.substring(i*2, i*2 + 2), 16)
	}
	if (prefix !== 0) {
		bytes[0] = prefix
	}
	return bytes
}

const deriveAESkey = async (password: string) => {
	// fetch server public key
	const serverPublicKey = "3d2c953f0eabd4851906dce48a318bd8e55e3aae4710da55e820b7cd81d6a8ed468da0b5e063419cf5b73ea7823df23d2df09651a76d076319b99051cffe36ae"
	const bufferedServerPK = toBufferWithPrefix(serverPublicKey, 4)

	// make user private key
	const userPrivateKey = await makeHash(password)
	const userPublicKey = privateToPublic(userPrivateKey)
	// get shared secret from user's private key & sever's public key
	var sharedSecret = secp.getSharedSecret(userPrivateKey, bufferedServerPK)
	// remove prefix
	sharedSecret = sharedSecret.slice(1, sharedSecret.length)
	// derive key from shared secret
	const derived = pbkdf2(sha256, toHexString(sharedSecret), 
		userPublicKey.slice(0, 16), {c:1000, dkLen:32})
	return derived;
}

const cryptography = {makeHash, toBufferWithPrefix, toHexString, deriveAESkey}
export default cryptography