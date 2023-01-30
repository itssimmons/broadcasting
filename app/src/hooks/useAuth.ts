import React, { useContext } from "react"
import { useLocation, useRouter } from "wouter";
import "isomorphic-fetch";
import UserCtx from "../context/UserCtx"
import type { AuthData } from "../types";

export default () => {
	const { setAuthUser } = useContext(UserCtx);
	const [location, navigate] = useLocation()

	const headers = {
		'Content-Type': 'application/json'
	}

	const login = async (payload: any) => {
		try {
			const response = await fetch('http://localhost:8000/api/login', {
				method: 'post',
				headers,
				body: JSON.stringify(payload)
			})

			const authData: any = response ? await response.json() : null;

			if (!authData?.user) throw new Error('User not found')

			setAuthUser(authData.user)
			localStorage.setItem('auth', JSON.stringify(authData))

			navigate('/chat')
		} catch (e) {
			console.error('Something went wrong :/', e)
		}
	}

	const logout = () => {
		setAuthUser(null)
		localStorage.removeItem('auth')
		navigate('/login')
	}

	return { login, logout }
}