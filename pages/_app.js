import '../styles/globals.css'
import { UserContext } from '@lib/context';
import { useUserData } from '@lib/hooks';
import Navbar from '@components/Navbar';
import { Provider as JotaiProvider } from "jotai";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  console.log("userData FROM MAIN: ", userData);

  return (
    <UserContext.Provider value={userData}>
      <JotaiProvider>
        <Navbar />
        <Component {...pageProps} />
      </JotaiProvider>
    </UserContext.Provider>
  );
}

export default MyApp
