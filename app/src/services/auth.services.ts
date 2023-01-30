import "isomorphic-fetch";
import type { AuthData } from "../types";

const headers = {
	'Content-Type': 'application/json'
}

export default {
	async login (payload: { phone: string }): Promise<AuthData | null> {
		const response = await fetch('http://localhost:8000/api/login', {
			method: 'post',
			headers,
			body: JSON.stringify(payload)
		})

		return response ? await response.json() : null;
	}
}
