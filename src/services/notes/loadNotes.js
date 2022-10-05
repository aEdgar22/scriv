import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const loadNotes = async (uid) => {
  try {
    const notes = [];
    const snapNotes = await getDocs(collection(db, uid, "journal", "notes"));

    snapNotes.forEach((snap) => {
      notes.push({
        id: snap.id,
        ...snap.data(),
      });
    });


    return notes;
  } catch (error) {
    console.log(error);
  }
};
