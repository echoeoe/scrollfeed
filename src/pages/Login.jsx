import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

export function Login(){
  
  const navigate = useNavigate();
  const { user, loading, signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(null);

  useEffect( ()=>{
    console.log("auth user, loading:", user?.email, loading);
  }, []);

  const handleSignIn = async () =>{
    if (!email || !password){
      setFormError('Username and password must not be blank.');
      return;
    }
    try{
      await signIn(email, password);
      navigate('/editor'); //redirect to editor 
    }
    catch(err){
      setFormError(err.message);
    }
  };

  const handleSignUp = async () => {

    //password requirements
    if (!email || !password){
      setFormError("Username and password must not be blank");
      return;
    }
    else if (password.length < 12 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) ||!/[^\w\s]/.test(password)){
      setFormError("Password must be at least 12 characters in length and contain at least one uppercase, lowercase, and special character.");
      return;
    }
  };

  return(
    <>
    <h1>Login</h1>
    <div>
      <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
    </div>
    <div>
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
    </div>
      <button id='signin-btn' onClick={()=> handleSignIn()}>Log In</button>
      <button id='signup-btn' onClick={()=>handleSignUp()}>Sign Up</button>
    {formError && <p>{formError}</p>}
    </>
  );
}