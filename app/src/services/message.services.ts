import "isomorphic-fetch";
import type { XResponse, Message } from "../types";

const headers = {
	'Content-Type': 'application/json'
}

export default {
	async send(payload: Message): Promise<XResponse<Message> | null> {
		const xpayload = {
			message: payload.message,
			type: '1',
			emisorId: payload.emisor.id,
			receiverId: payload.receiver.id
		}

		const response = await fetch('http://localhost:8000/api/messages', {
			method: 'post',
			headers,
			body: JSON.stringify(xpayload)
		})

		return response ? await response.json() : null;
	},
	async all(): Promise<XResponse<Message[]> | null> {
		const response = await fetch('http://localhost:8000/api/messages', {
			method: 'get',
			headers,
		})

		return response ? await response.json() : null;
	}
}