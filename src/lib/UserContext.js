import React, { createContext, useState, useEffect, useContext } from 'react';
import { FirebaseContext } from './FirebaseContext';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { auth } = useContext(FirebaseContext);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // console.log('onAuthStateChanged', user);
      try {
        setUser(user);
        // console.log('Current User:', user); // log the current user state
        setIsLoading(false);
      } catch (error) {
        setError(`An error occurred during authentication: ${error.message}`);
        setIsLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const logoutUser = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      setError(`An error occurred during logout: ${error.message}`);
    }
  };

  return (
    <UserContext.Provider value={{ user, isLoading, error, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
