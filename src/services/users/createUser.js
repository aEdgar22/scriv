import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

export const createUser = async (userName, userEmail) => {
  try {
    console.log("llamada");

    const docRef = await addDoc(collection(db, "users"), {
      userName: userName,
      userEmail: userEmail,
    });
    console.log("usuario creado con: ", docRef.id);
    
  } catch (error) {
    console.log(error);
  }
};
