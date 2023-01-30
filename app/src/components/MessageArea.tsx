import React, { useState } from "react"
import { Clip, MicOrSend } from "./Icons"
import styles from "../styles/MessageArea.module.css"

export default ({ setMessage, onSend }: any) => {
	const [dirty, setDirty] = useState(false)

	const handleMessage = (e: any) => {
		const message = e.target.value;
		setDirty(Boolean(message))
		setMessage(message)
	}

	const handleMic = () => {
		console.info('recording audio...')
	}
	
	const handleUpload = () => {
		console.info('opening file explorer...')
	}

	return (
		<footer className={styles.footerChat}>
			<Clip onClick={handleUpload} />
			<span className={styles.lineDiv} />
			<textarea
				rows={1} 
				placeholder='Type a message...'
				className={styles.chatArea}
				onChange={handleMessage}
				onKeyUp={onSend}
			/>
			<MicOrSend isDirty={dirty} onSend={onSend} onMicPress={handleMic} />
		</footer>
	)
}
