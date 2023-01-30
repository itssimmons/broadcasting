import React, { useContext } from "react";
import { useLocation } from "wouter";
import UserCtx from "../context/UserCtx";
import service from "../services/auth.services";

export default () => {
	const { setAuthUser } = useContext(UserCtx);
	const [_, navigate] = useLocation()

	const login = async (payload: any) => {
		try {
			const authData = await service.login(payload)

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