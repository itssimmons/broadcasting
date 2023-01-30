import React from "react"
import { Link } from "wouter"
import Screen from "../components/Screen"
import Input, { Button } from "../components/Inputs"
import type { LoginRequest } from "../types"
import styles from "../styles/Login.module.css"
import useAuth from "../hooks/useAuth"

export default () => {
	const { login } = useAuth()

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()
		const payload = Object.fromEntries(new FormData(e.target as HTMLFormElement))

		await login(payload)
	}

	return (
		<Screen classNames={[styles.fadedBg]}>
			<section className={styles.presentation}>
				<img src="/assets/3297347.png" className={styles.art} />
				<span className={styles.logo}>
					<img src="/assets/logo.svg" />
				</span>
				<div className={styles.welcomeMsg}>
					<h1>Welcome to Broadcasting</h1>
					<p>Experimental chat app that works as a connection between the api and app through a socket, to see how works the auto-update messages in real time.</p>
				</div>
			</section>
			<section className={styles.login}>
				<h1>Log In</h1>
				<form id="#login" onSubmit={handleSubmit}>
					<Input type="text" name="phone" placeholder="** **** ****" title="Phone number" />
					<Button type="submit" />
				</form>
				<Link href="#">
					<a>Forgot phone numer?</a>
				</Link>
			</section>
		</Screen>
	)
}
