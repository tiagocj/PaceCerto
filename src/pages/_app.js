import '@/styles/globals.css';
import Topo from '@/componentes/Topo';
import Rodape from '@/componentes/Rodape'; // se quiser o rodapé fixo também

export default function App({ Component, pageProps }) {
  return (
    <>
      <Topo />
      <Component {...pageProps} />
      <Rodape />
    </>
  );
}
