import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "primereact/resources/themes/mdc-dark-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                                
import 'primeflex/primeflex.css';
import "../styles/Form.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
