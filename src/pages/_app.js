import '@/styles/globals.css';
import Topo from '@/componentes/Topo';
import Rodape from '@/componentes/Rodape';
import { useEffect } from 'react';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-8DPM76NGNN');
    }
  }, []);

  return (
    <>
      {/* Script do Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-8DPM76NGNN"
      />

      <Topo />
      <Component {...pageProps} />
      <Rodape />
    </>
  );
}
