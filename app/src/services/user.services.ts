import "isomorphic-fetch";
import type { User, XResponse } from "../types";

const headers = {
	'Content-Type': 'application/json'
}

export default {
	async find (id: string): Promise<XResponse<User> | null> {
		console.log(id)
		const response = await fetch(`http://localhost:8000/api/users/${id}`, {
			method: 'get',
			headers,
		})

		return response ? await response.json() : null;
	}
}