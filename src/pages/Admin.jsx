import { Permit } from '../components/Permit'; 

export function Admin(){
  
  //fetch email (auth.users), role (public.profiles)
  

  const btnStyle = {
    border: "3px solid orange",
    position: "fixed",
    right: "6vw"
  }

  const adminNav = {
    top: "6vh",
    position: "fixed",
  }

  return(
    <>
    <nav id="adminNav" style={adminNav}>
      <button className="save-btn" style={btnStyle}>save</button>
    </nav>
    
    <h1>Manage Permissions</h1> 
    
    <Permit email="sampleEmail@gmail.com" isEditor="Viewer"/>
    <Permit email="anotherUser@gmail.com" isEditor="Editor"/>
    <Permit email="exampleEmail@gmail.com" isEditor="Admin"/>
    
    </>
  );
}