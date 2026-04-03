import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

export async function createDoc(uid, user, fullName, email) {
  if (!uid) return;

  const userRef = doc(db, "users", uid);
  const userData = await getDoc(userRef);

  if (!userData.exists()) {
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        name: user?.displayName || fullName || "",
        email: user?.email || email || "",
        photoURL: user?.photoURL || "",
        createdAt,
      });

      toast.success("Account Created!");
    } catch (error) {
      toast.error(error.message);
      console.error("Error creating user document: ", error);
    }
  }
}