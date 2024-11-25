import { useState } from 'react'
import './App.css'
import UserContextProvider from '../Contexts/UserContextProvider'
import Login from '../Componenets/Login'
import Profile from '../Componenets/Profile'

function App() {

  return (
    <UserContextProvider>
            <Login />
            <Profile />
    </UserContextProvider>
  )
}

export default App
