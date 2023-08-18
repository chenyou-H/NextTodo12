// import '../styles/globals.css'
import '../dist/output.css';
// import '../styles/input.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
