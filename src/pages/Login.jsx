import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

export function Login(){
  
  const { user, loading, signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect( ()=>{
    console.log("auth user, loading:", user, loading);
  }, []);

  return(
    <>
    <h1>Login</h1>
    <div>
      <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
    </div>
    <div>
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
    </div>
      <button id='signin-btn' onClick={()=> signIn(email, password)}>Log In</button>
      <button id='signup-btn'>Sign Up</button>
    </>
  );
}