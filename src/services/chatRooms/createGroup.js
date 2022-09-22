import { collection, addDoc} from "firebase/firestore";
import { db } from "../../firebase/config";

export const createGroup = (userArray, userUid, name) => {
  const group = {
    createdAt: new Date(),
    createdBy: userUid,
    userArray: userArray ? userArray : [],
    name,
  };
  
  try {

   const groupRef = await addDoc(collection(db, 'groups'), group);
   
    return groupRef

  } catch (error) {
    console.log(error);
  }
};
