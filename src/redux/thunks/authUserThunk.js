import { setUser } from "../slices/userSlice";
import { setError, startLoading, finishLoading } from "../slices/uiSlice";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
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

export const loginWithGoogle = () => {
  return async (dispatch) => {
    const googleProvider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, googleProvider);

    dispatch(
      setUser({
        uid: user.uid,
        userName: user.displayName,
      })
    );
  };
};

export const loginUserEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading());

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        setUser({
          uid: user.uid,
          userName: user.displayName,
        })
      );

      dispatch(finishLoading());
    } catch (error) {
      dispatch(
        setError({
          error: true,
          msgError: error.message,
        })
      );
      dispatch(finishLoading());
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    await signOut(auth);

    dispatch(
      setUser({
        uid: null,
        userName: null,
      })
    );
  };
};
