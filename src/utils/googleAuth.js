import { toast } from "react-toastify";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createDoc } from "./createdoc";

const provider = new GoogleAuthProvider();

export async function googleAuth({ setLoading, navigate }) {
  setLoading(true);
  try {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        createDoc(user.uid, user);
        navigate("/dashboard");
        setLoading(false);
        toast.success("Authenticated with Google!");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        setLoading(false);
      });
  } catch (error) {
    toast.error(error.message);
    setLoading(false);
  }
}
