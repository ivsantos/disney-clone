import '@/styles/globals.css';

import Header from '@/components/Header/Header';
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session} refetchOnWindowFocus={true}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
