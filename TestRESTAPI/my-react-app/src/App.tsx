// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import {useGoogleLogin} from "@react-oauth/google";

function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:4097/api/categories')
      .then(response => {
        console.log("Response: ", response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const loginByGoogle = useGoogleLogin({
    onSuccess: tokenResponse => {
      // console.log("Google Responce", tokenResponse)
      console.log("access_token", tokenResponse.access_token)
    },
  });

  return (
    <>
      <h1>Hello World</h1>

      <button onClick={() => loginByGoogle()}>Sign in with Google 🚀</button>
    </>
  )
}

export default App
