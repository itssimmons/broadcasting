import React from "react"
import { Phone } from "./Icons"
import styles from "../styles/Inputs.module.css"

const Input = ({ type, name, placeholder, title }: any) => {
	return (
		<div className={styles.input}>
			<p>{title}</p>
			<div className={styles.field}>
				<Phone />
				<input type={type} name={name} placeholder={placeholder} />
			</div>
		</div>
	)
}

const Button = ({ type = "submit", label = "Continue" }: any) => {
	return (
		<button type="submit" className={styles.btn}>{label}</button>
	)
}

export { Input as default, Button }
