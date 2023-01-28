import React, { useContext, useEffect, useState } from 'react';
import UserCtx from '../context/UserCtx';
import Chat from '../components/Chat';
import Header from '../components/Header';
import MessageArea from '../components/MessageArea';
import Screen from '../components/Screen';
import KeyCode from '../helpers/KeyCode';
import type { Message, User } from '../types'

const receiver: User = {
  id: 'af7c1fe6',
  name: 'Broadcaster',
  lastName: '',
  lastConnection: 'Fri Jan 27 2023 14:12:48'
} 

const user: User = {
  id: '08c71152',
  name: 'John',
  lastName: 'Doe',
  lastConnection: null
}

const testingMsgs: Message[] = [
  {
    emisor: receiver,
    receiver: user,
    message: 'Lorem ipsum dolor sit'
  },
  {
    emisor: user,
    receiver: receiver,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

export default () => {
  const { authUser: user } = useContext(UserCtx)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    setMessages(messages => ([
      ...messages,
      {
        receiver: receiver,
        emisor: user!,
        message
      }
    ]))
  }, [])

  const handleSend = (e: any) => {
    const callback = () => {
      console.log('sending msg...')
    }

    if (e.nativeEvent instanceof KeyboardEvent)
      if (e.which === KeyCode.Enter)
        callback()

    if (e.nativeEvent instanceof PointerEvent)
      callback()
  }

  return (
    <Screen>
      <Header receiver={receiver} />
      <Chat messages={testingMsgs} />
      <MessageArea
        setMessage={setMessage}
        onSend={handleSend}
      />
    </Screen>
  );
}
