import React from "react"
import styles from "../styles/Screen.module.css"

interface ScreenProps {
	children: JSX.Element | JSX.Element[]
	classNames?: string[]
}

export default ({ children, classNames: classes }: ScreenProps) => {
	const classNames = classes ? classes.join(' ') : ''

	return (
		<main className={`${styles.main} ${classNames}`}>
			{children}
		</main>
	)
}
