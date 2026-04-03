import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

export async function loginWithEmail({
  email,
  password,
  setLoading,
  setEmail,
  setPassword,
  navigate
}) {
    setLoading(true);
  if (email === "" || password === "") {
    toast.error("Please fill all the fields");
    setLoading(false);
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("User logged in successfully");
        setLoading(false);
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        setLoading(false);
      });
  }
}
