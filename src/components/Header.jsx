import React, { use, useEffect } from 'react'
import './Header.css'
import {auth} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {

  const [user,loading]=useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, loading]);

  function handleLogout() {
    alert('Logged out');
  }


  return (
    <div className='navbar'>
      <p className='logo'>WealthTrack</p>
      {user && <p className='logout' onClick={handleLogout}>Logout</p>}
    </div>
  )
}

export default Header