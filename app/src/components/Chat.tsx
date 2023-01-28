import React, { useContext } from "react"
import UserCtx from "../context/UserCtx"
import type { Message, User } from "../types"
import styles from "../styles/Chat.module.css"

const Message = ({ emisor, message, receiver }: Message) => {
  const { authUser: user } = useContext(UserCtx)
  const isMyMsg = user?.id === emisor.id
	const emisorPhoto = emisor.name[0]

	return (
		<div className={isMyMsg ? styles.myMsg : styles.yourMsg}>
			<section className={styles.user}>
				{!isMyMsg && <span className={styles.photo}>{emisorPhoto}</span>}
				<div className={styles.msgInfo}>
					<strong>{isMyMsg ? 'You' : `${emisor.name} ${emisor.lastName}`}</strong>
					<p>19:43</p>
				</div>
			</section>
			<div className={styles.message}>
				<p>{message}</p>
			</div>
		</div>
	)
}

export default ({ messages }: { messages: Message[] }) => {
	return (
		<section className={styles.chat}>
			{messages.map((message, key) => (
				<Message key={key} {...message} />
			))}
		</section>
	)
}