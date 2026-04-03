import "./Auth.css";
import Input from "./Input";
import Button from "./Button";
import { use, useState } from "react";
import { signupWithEmail } from "../utils/Signup";
import { loginWithEmail } from "../utils/Login";
import { useNavigate } from "react-router-dom";

function AuthComponent() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate=useNavigate();

  const isLogin = login;

  const resetFields = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setLoading(false);
  };

  return (
    <div className="signup-wrapper">
      <h1 className="signup-head">
        {isLogin ? "Login" : "Sign Up"} on <span>WealthTrack</span>
      </h1>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Full Name (only signup) */}
        {!isLogin && (
          <Input
            label="Full Name"
            state={fullName}
            setState={setFullName}
            placeholder="Enter your full name"
          />
        )}

        {/* Email */}
        <Input
          type="email"
          label="Email"
          state={email}
          setState={setEmail}
          placeholder="Enter your email"
        />

        {/* Password */}
        <Input
          type="password"
          label="Password"
          state={password}
          setState={setPassword}
          placeholder="Enter your password"
        />

        {/* Confirm Password (only signup) */}
        {!isLogin && (
          <Input
            type="password"
            label="Confirm Password"
            state={confirmPassword}
            setState={setConfirmPassword}
            placeholder="Confirm your password"
          />
        )}

        {/* Main Button */}
        <Button
          disabled={loading}
          text={
            loading
              ? isLogin
                ? "Logging In..."
                : "Signing Up..."
              : isLogin
                ? "Log In using Email and Password"
                : "Sign Up using Email and Password"
          }
          onClick={() => {
            if (isLogin) {
              loginWithEmail({
                email,
                password,
                setLoading,
                setEmail,
                setPassword,
                navigate
              });
            } else {
              signupWithEmail({
                fullName,
                email,
                password,
                confirmPassword,
                setLoading,
                setFullName,
                setEmail,
                setPassword,
                setConfirmPassword,
                navigate
              });
            }
          }}
        />

        {/* Google Button */}
        <Button
          text={
            loading
              ? isLogin
                ? "Logging In..."
                : "Signing Up..."
              : isLogin
                ? "Log In using Google"
                : "Sign Up using Google"
          }
          blue={true}
          disabled={loading}
        />

        {/* Toggle */}
        <p
          className="toggle-login"
          onClick={() => {
            setLogin((prev) => !prev);
            resetFields();
          }}
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Log In"}
        </p>
      </form>
    </div>
  );
}

export default AuthComponent;
