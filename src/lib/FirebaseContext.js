import React, { createContext } from 'react';
import { auth } from '@/firebase';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

export const FirebaseContext = createContext();

export const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      // console.log(authResult);
      return true;
    },
  },
};

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ auth, uiConfig }}>
      {children}
    </FirebaseContext.Provider>
  );
};
