import FooterLayout from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
     <Header />
    <Component {...pageProps}/>
    <FooterLayout />
    </div>
  
  )
  
}

export default MyApp
