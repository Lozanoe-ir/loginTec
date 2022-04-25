import * as React from 'react';
import '../styles/globals.css';
import {FailProvider} from '../components/context/failContext';
function MyApp({ Component, pageProps }) {
  return (
    <FailProvider>
      <Component {...pageProps} />
    </FailProvider>
  )
}

export default MyApp
