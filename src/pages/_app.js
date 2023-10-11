import '@/styles/globals.css';
import { UserProvider } from '@/lib/UserContext';
import { FirebaseProvider } from '@/lib/FirebaseContext';

export default function App({ Component, pageProps }) {
  return (
    <FirebaseProvider>
      <UserProvider>
        <Component {...pageProps} />
        <script src='https://unpkg.com/react@18/umd/react.development.js'></script>
        <script src='https://unpkg.com/react-dom@18/umd/react-dom.development.js'></script>
        <script src='https://weatherapp-o38ejph7l-robertsgh.vercel.app/WeatherWidgetBundle.js'></script>
      </UserProvider>
    </FirebaseProvider>
  );
}
