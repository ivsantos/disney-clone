import { SessionProvider } from 'next-auth/react';
import Header from '@/components/Header/Header';
import '@/styles/globals.css';

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session} refetchOnWindowFocus={true}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
