import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import {createDoc} from "./createdoc";

export async function signupWithEmail({
  fullName,
  email,
  password,
  confirmPassword,
  setLoading,
  setFullName,
  setEmail,
  setPassword,
  setConfirmPassword,
}) {
    setLoading(true);
    if (
      fullName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      toast.error("Please fill all the fields");
      setLoading(false);
    } else {
      if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            toast.success("User created successfully");
            setLoading(false);
            setFullName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            createDoc(user.uid);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            setLoading(false);
          });
      } else {
        toast.error("Passwords do not match");
        setLoading(false);
      }
    }
  }
