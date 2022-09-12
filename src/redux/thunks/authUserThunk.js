import { setUser } from "../slices/userSlice";
import { setError } from "../slices/uiSlice";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
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
    } catch (error) {
      dispatch(
        setError({
          error: true,
          msgError: error.message,
        })
      );
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
        })
      );
    } catch (error) {
      dispatch(
        setError({
          error: true,
          msgError: error.message,
        })
      );
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    await signOut(auth);

    dispatch(setUser({
      uid: null,
      userName: null
    }));
  };
};
