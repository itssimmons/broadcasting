export interface Message {
  receiver: User
  emisor: User
  message: string
}

export interface User {
  id: string;
  name: string | ''
  lastName: string | ''
  lastConnection: string | null
}

export type Auth = { user: User, token: string } 

export type UserCtx = {
  authUser: User | null
  setAuthUser: (user: User | null) => void
}

export type LoginRequest = {
  [k: string]: FormDataEntryValue
  phone: string
}

export type AuthData = {
  user: User
  accessToken: string
  tokenType: string
  expiresIn: number
}
