import { Permit } from '../components/Permit'; 
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export function Admin(){
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
      async function fetchUsers() {
        setLoading(true);
        setError(null);
        try {
          const { data, error } = await supabase.rpc('get_users_with_roles');
          if (error) throw error;
          setUsers(data);
        } catch (err) {
          console.error('Error fetching users:', err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      fetchUsers();
    }, []);
  
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
  
      {loading && <p>Loading users...</p>}
      {error && <p className="redText">{error}</p>}
      
      {users.map(user => (
        <Permit key={user.email} email={user.email} isEditor={user.role} />
      ))}
      </>
    );
}