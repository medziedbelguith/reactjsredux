import React from 'react'
import { useDispatch } from 'react-redux'
import {login,logout} from './features/user'
export default function Login() {
  const dispatch=useDispatch();
  return (
    <div><button onClick={()=>dispatch(login({email:"zied@test.com",nom:"belguith",prenom:"zied",adress:"tunisie,afrique",}))}>se connecter !</button><button onClick={()=>dispatch(logout())}>se déconnecter !</button></div>
  )
}
