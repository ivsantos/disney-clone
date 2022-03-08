import Header from '../components/Header/Header';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <div className="h-[200vh]">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
