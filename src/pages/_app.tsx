import type { AppProps } from 'next/app';
import { AmountProvider } from '../context/AmountContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AmountProvider>
      <Component {...pageProps} />
    </AmountProvider>
  )
}
export default MyApp
