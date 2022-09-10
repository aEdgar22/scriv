import { setUser } from "../slices/userSlice";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
      return true;
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUserEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        setUser({
          uid: user.uid,
          userName: user.displayName,
          login: true,
        })
      );
    } catch (error) {

       dispatch(
        setUser({
          error: true,
          msgError: error.message
        })
      );
    }
  };
};
