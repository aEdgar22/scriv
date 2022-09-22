import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const createUser = async (user) => {
  try {
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      displayName: user.displayName,
      userEmail: user.email,
    });
  } catch (error) {
    console.log(error);
  }
};
