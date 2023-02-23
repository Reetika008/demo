import { firestoreDb, getDoc, setDoc, auth, doc } from "../library/firebase";

export const createUser = async (email, firstName, lastName) => {
  try {
    const user = auth.currentUser;
    await setDoc(doc(firestoreDb, "user", user.uid), {
      email: email,
      firstName: firstName,
      lastName: lastName,
    });
    return "success";
  } catch (error) {
    console.log("error", error);
  }
};
