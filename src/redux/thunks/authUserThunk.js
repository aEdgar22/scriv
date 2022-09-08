import { setUser } from "../slices/userSlice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";

export const registerUser = (email, password, userName) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, {
        displayName: userName,
      });

      dispatch(
        setUser({
          uid: user.uid,
          userName: user.displayName,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
