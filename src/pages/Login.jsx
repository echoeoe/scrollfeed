import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

export function Login(){
  
  const navigate = useNavigate();
  const { user, loading, signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(null);

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

  const handleReset = async () =>{
    //redirect to reset 
    console.log("reset clicked");
  }

  const signupRedirect = async () => { //redirect to signup 
   navigate('/signup');
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
      <button onClick={()=> handleSignIn()}>Log In</button>
    <p>New user?{" "}
      <button className="link-button" onClick={()=>signupRedirect()}>Sign Up</button>  
    </p>
    <p>Forgot password?{" "}
      <button className="link-button" onClick={()=>handleReset()}>Reset</button>
    </p>

    {formError && <p className="redText">{formError}</p>}
    </>
  );
}