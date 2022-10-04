import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";

export const createNewNote = async (newNote, uid) => {
  try {
    /* const docRef = await setDoc(doc(db, uid, "journal"), newNote ); */
    const docRef = await addDoc(
      collection(db, uid, "journal", "notes"),
      newNote
    );

    return docRef;
  } catch (error) {
    console.log(error);
  }
};
