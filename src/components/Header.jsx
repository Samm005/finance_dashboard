import React, { use, useEffect } from "react";
import "./Header.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

function Header() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, loading]);

  function handleLogout() {
    try {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          toast.success("Logged out successfully");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
          // An error happened.
        });
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="navbar">
      <p className="logo">WealthTrack</p>
      {user && (
        <p className="logo link" onClick={handleLogout}>
          Logout
        </p>
      )}
    </div>
  );
}

export default Header;
