import Header from '../components/Header/Header';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
