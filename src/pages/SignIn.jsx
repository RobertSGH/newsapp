import { useContext, useEffect } from 'react';
import { UserContext } from '@/lib/UserContext';
import { FirebaseContext } from '@/lib/FirebaseContext';
import { BeatLoader } from 'react-spinners';
import 'firebaseui/dist/firebaseui.css';
import { useRouter } from 'next/router';
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

const SignIn = () => {
  const { user, isLoading, error } = useContext(UserContext);
  const { auth, uiConfig } = useContext(FirebaseContext);
  const router = useRouter();

  useEffect(() => {
    import('firebaseui').then((firebaseui) => {
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(auth);

      const firebaseAuth = getAuth();
      setPersistence(firebaseAuth, browserSessionPersistence).then(() => {
        if (document.getElementById('firebaseui-auth-container')) {
          ui.start('#firebaseui-auth-container', uiConfig);
        }
      });

      return () => {
        ui.reset();
      };
    });
  }, [auth]);

  useEffect(() => {
    if (user) {
      console.log('User is not null:', user); // log if the user is not null
      router.push('/');
    } else {
      console.log('User is null'); // log if the user is null
    }
  }, [user]);

  if (isLoading) {
    return <BeatLoader />;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div id='firebaseui-auth-container'></div>
    </div>
  );
};

export default SignIn;
