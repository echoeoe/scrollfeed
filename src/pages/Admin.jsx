import { Permit } from '../components/Permit'; 

export function Admin(){
  
  //fetch email, isEditor

  return(
    <>
    <h1>Manage Permissions</h1>
    <Permit email="sampleEmail@gmail.com" isEditor="Viewer"/>
    <Permit email="sampleEmail@gmail.com" isEditor="Editor"/>
    </>
  );
}