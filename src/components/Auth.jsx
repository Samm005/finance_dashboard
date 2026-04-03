import "./Auth.css";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import {signupWithEmail} from "../utils/Signup";

function AuthComponent() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="signup-wrapper">
      <h1 className="signup-head">
        Sign Up on <span>WealthTrack</span>
      </h1>

      <form>
        <Input
          label="Full Name"
          state={fullName}
          setState={setFullName}
          placeholder="Enter your full name"
        />
        <Input
          type={"email"}
          label="Email"
          state={email}
          setState={setEmail}
          placeholder="Enter your email"
        />
        <Input
          type={"password"}
          label="Password"
          state={password}
          setState={setPassword}
          placeholder="Enter your password"
        />
        <Input
          type={"password"}
          label="Confirm Password"
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder="Confirm your password"
        />

        <Button
          disabled={loading}
          text={loading ? "Signing Up..." : "Sign Up using Email and Password"}
          onClick={() =>
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
            })
          }
        />
        <Button
          text={loading ? "Signing Up..." : "Sign Up using Google"}
          blue={true}
          disabled={loading}
        />
      </form>
    </div>
  );
}

export default AuthComponent;
