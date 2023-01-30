import React, { useContext, useEffect, useState } from 'react';
import UserCtx from "../context/UserCtx";
import Chat from "../components/Chat";
import Header from "../components/Header";
import MessageArea from "../components/MessageArea";
import Screen from "../components/Screen";
import KeyCode from "../helpers/KeyCode";
import msgServices from "../services/message.services"
import userServices from "../services/user.services"
import type { Message, User, XResponse } from '../types'

const johnId = '3e365095-81ce-4a04-a06b-58c0ba9138ee'
const broadcasterId = '875f7d06-4920-49db-bd14-7972f1194de4'

export default () => {
  const { authUser: user } = useContext(UserCtx)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [receiver, setReceiver] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const receiver = await userServices.find(user?.id === johnId ? broadcasterId : johnId) as XResponse<User>
        const allMessages = await msgServices.all() as XResponse<Message[]>

        setReceiver(receiver.data)
        setMessages(allMessages.data)
      } catch {
        setLoading(false)
        console.error('Something went wrong :/')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const handleSend = async (e: any) => {
    const callback = async () => {
      const newMessage = {
        receiver: receiver as User,
        emisor: user!,
        message
      }

      setMessages(messages => ([
        ...messages,
        newMessage
      ]))

      await msgServices.send(newMessage)
    }

    if (e.nativeEvent instanceof KeyboardEvent)
      if (e.which === KeyCode.Enter)
        await callback()

    if (e.nativeEvent instanceof PointerEvent)
      await callback()
  }

  return !loading ? (
    <Screen>
      <Header receiver={receiver} />
      <Chat messages={messages} />
      <MessageArea
        setMessage={setMessage}
        onSend={handleSend}
      />
    </Screen>
  ) : (
    <Screen>
      <p>Loading...</p>
    </Screen>
  )
}
