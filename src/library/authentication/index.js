import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firestoreDb, doc, getDoc, auth } from "../firebase";

export const UserRegistration = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    return "success";
  } catch (err) {
    console.log("There is something wrong!!!!", err.message);
  }
};

export const CheckUserLogin = async (email, password) => {
  try {
    // Log in the user with email and password
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const userDoc = await getDoc(doc(firestoreDb, "user", user.uid));
    const userData = userDoc.data();
  } catch (error) {
    console.log(error);
  }
};
