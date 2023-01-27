import React from "react"
import styles from "../styles/Screen.module.css"

export default ({ children }: any) => {
	return (
		<main className={styles.main}>
			{children}
		</main>
	)
}
