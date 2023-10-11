import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAcyv5tG7bG77D5rW6mZZXjnX6u48JZj04',
  authDomain: 'newsapp-fb760.firebaseapp.com',
  projectId: 'newsapp-fb760',
  storageBucket: 'newsapp-fb760.appspot.com',
  messagingSenderId: '459823688294',
  appId: '1:459823688294:web:9e5b5ca03a87dee1e5dba7',
  measurementId: 'G-8YGW5VQGBZ',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
