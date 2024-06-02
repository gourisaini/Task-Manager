import React, { useContext, useEffect } from 'react'
import "./App.css"
import LoginComponent from './components/LoginComponent'
import ListComponent from '../src/components/ListComponent'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { TaskContext } from './context/TaskProvider';



const App = () => {
  const { user } = useContext(TaskContext)
  const clientId = process.env.CLIENTID
  return (
    <>
      <div className="App p-5 m-5">
        <GoogleOAuthProvider clientId={clientId}>
          {user ? <ListComponent /> : <LoginComponent />}
        </GoogleOAuthProvider>

      </div>
    </>
  )
}

export default App