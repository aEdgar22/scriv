import { doc, setDoc} from "firebase/firestore";
import { db } from "../../firebase/config";

export const saveNote = async (noteId, uid, note) => {
  try {
    const docRef = doc(db, uid, "journal", "notes", noteId);

    await setDoc(docRef, note, {merge: true});

    return true;
  } catch (error) {
    Promise.reject(error);
  }
};
