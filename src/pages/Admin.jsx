import { Permit } from '../components/Permit'; 

export function Admin(){
  
  //fetch email, isEditor

  return(
    <>
    <h1>Manage Permissions</h1>
    <h2>Email, Editor?</h2>
    <Permit email="sampleEmail@gmail.com" isEditor="False"/>
    <Permit email="sampleEmail@gmail.com" isEditor="False"/>
    </>
  );
}