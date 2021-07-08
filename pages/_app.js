import '../styles/globals.css'
import 'antd/dist/antd.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}