import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; 

export function Signup(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [formError, setFormError] = useState(null);

    const handleSignUp = async () => {
        //password requirements
        if (!email || !password){
            setFormError("Username and password must not be blank.");
            return;
        }
        else if (password.length < 12 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) ||!/[^\w\s]/.test(password)){
            setFormError("Password must be at least 12 characters in length and contain at least one uppercase, lowercase, and special character.");
            return;
        }
    };

    return(<>
    <h1>Signup</h1>
    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br/><br/>
    <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br/><br/>
    <input type="text" placeholder="confirm password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}></input><br/><br/>
    <button onClick={()=>handleSignUp()}>sign up</button>
    <p className="formError">{formError}</p>
    </>);
}