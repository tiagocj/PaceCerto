import Head from "next/head";
import Card from "@/componentes/Card";
import BoasVindas from "@/componentes/BoasVindas";
import Menu from "@/componentes/Menu";
import Rodape from "@/componentes/Rodape";
import Contato from "@/componentes/Contato";
import Topo from "@/componentes/Topo";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pace Certo - Corridas de Rua</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9081276319826306"
     crossorigin="anonymous"></script>
      </Head>
      <section>
        <BoasVindas/>
      </section>

      <section id="corridas">
        <Card/>
      </section>

      <section>
        <p>Dicas em breve...</p>
      </section>

      <section>
        <p>Parcerias em breve...</p>
      </section>
        
      <section id="contato">
        <Contato/>
        <SpeedInsights />
      </section>

      
    </>
  );
}
