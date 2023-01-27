export interface Message {
  receiver: User
  emisor: User
  message: string
}

interface User {
  id: string;
  name: string | ''
  lastName: string | ''
  lastConnection: string | null
}
