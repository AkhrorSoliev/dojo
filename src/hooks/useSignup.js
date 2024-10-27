import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // upload user thumbnail
      const storageRef = ref(storage, `profilePictures/${res.user.uid}.png`);
      await uploadString(storageRef, thumbnail, "data_url");
      const downloadUrl = await getDownloadURL(storageRef);

      // add display name to user
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: downloadUrl,
      });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    } finally {
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
