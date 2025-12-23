export function Login(){
  
  return(
    <>
    <h1>Login</h1>
    <div>
      <input type="text" placeholder="username"></input>
    </div>
    <div>
      <input type="password" placeholder="password"></input>
    </div>
      <button id='signin-btn'>Log In</button>
      <button id='signup-btn'>Sign Up</button>
    </>
  );
}