import { useState, useEffect } from 'react';
import { projectAuth, projectStorage } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (displayName, email, password, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      // Signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error('Could not complete sign-up.');
      }

      // Upload user profile picture
      const uploadPath = `profilePictures/${res.user.uid}/${thumbnail.name}`;
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      const imgURL = await img.ref.getDownloadURL();

      // Add display name to user
      await res.user.updateProfile({ displayName, photoURL: imgURL });

      // Dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      // Update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    // setIsCancelled(false);

    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
