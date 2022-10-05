import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";


export const deleteNoteFromFirestore = async(noteId, uid) => {
    try {
    const docRef = doc(db, uid, "journal", "notes", noteId);

    console.log(docRef);
    await deleteDoc(docRef);
    
    return true;
        
    } catch (error) {
        Promise.reject(error);
    }

}