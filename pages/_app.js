import { useState } from 'react';
import Footer from '../components/Footer';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const [cart,setCart] = useState();

  return(
    <>
       <Navbar/>
       <Component {...pageProps} />
      <Footer/>
    </>
  ) 
}

export default MyApp
