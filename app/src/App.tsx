import React, { useState } from "react"
import { Route, Switch, Redirect, Router } from "wouter"
import UserCtx from "./context/UserCtx"
import LoginView from "./views/Login.view"
import ChatView from "./views/Chat.view"
import type { RouteProps } from "wouter"
import type { Auth, User } from "./types"

const PrivateRoute = ({ path }: RouteProps) => {
  const [authUser, setAuthUser] = useState<User | null>(null)

  if (!authUser) return <Redirect to="/login" />

  return (
    <Route path={path}>
      <Route path="/chat" component={ChatView} />
    </Route>
  )
}

const App = () => {
  const [authUser, setAuthUser] = useState<User | null>(null)

  React.useEffect(() => {
    const authStored = localStorage.getItem('auth')
    const lastAuth: Auth | null = authStored ? JSON.parse(authStored) : null;

    setAuthUser(lastAuth ? lastAuth.user : null)
  }, [])

  const value = React.useMemo(() => ({
    authUser,
    setAuthUser
  }), [authUser]);


  return (
    <UserCtx.Provider value={value}>
      <Router>
        <Switch>
          <PrivateRoute path="/" />
          <Route path="/login" component={LoginView} />
        </Switch>
      </Router>
    </UserCtx.Provider>
  )
}

export default App
