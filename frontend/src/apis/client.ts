import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_DOMAIN + 'api'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

export const client = () => {
	const instance = axios.create({
		// something like tokens
	})
	return instance;
}

export const clientWithToken = () => {
	const instance = axios.create({
		headers:{
			Authorization: getAccessTokenHeader()
		}
	})
	return instance;
}

const getAccessTokenHeader = () => {
	return "Bearer " + localStorage.getItem("accessToken");
}