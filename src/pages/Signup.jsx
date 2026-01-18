import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; 

export function Signup(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [formError, setFormError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    const { signUp, signupError } = useAuth();

    const handleSignUp = async () => {
        setFormError(null);
        setSuccessMsg(null);
        
        //password requirements
        if (!email || !password){
            setFormError("Username and password must not be blank.");
            return;
        }
        else if (password.length < 12){
            setFormError("Password must be at least 12 characters in length.");
            return;
        }
        else if(password != passwordConfirm){
            setFormError("Passwords must match.");
            return;
        }
        //let authprovider handle 
        const result = await signUp(email, password);
        // console.log(result);
        if (result.success){
            setSuccessMsg("A confirmation email has been sent to your address.");
        }

    };

    return(<>
    <h1>Signup</h1>
    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br/><br/>
    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br/><br/>
    <input type="password" placeholder="confirm password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}></input><br/><br/>
    <button onClick={()=>handleSignUp()}>sign up</button>
    <p className="redText">{formError? formError: signupError}</p>
    <p className="greenText">{successMsg}</p>
    </>);
}