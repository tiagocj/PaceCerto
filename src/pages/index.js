import Head from "next/head";
import Card from "@/componentes/Card";
import BoasVindas from "@/componentes/BoasVindas";
import Menu from "@/componentes/Menu";
import Rodape from "@/componentes/Rodape";
import Contato from "@/componentes/Contato";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pace Certo - Corridas de Rua</title>
      </Head>
      <header>
        <h1>Pace Certo</h1>
        <Menu/>
      </header>

      <section>
        <BoasVindas/>
      </section>

      <section id="corridas">
        <Card/>
      </section>

      <section id="contato">
        <Contato/>
      </section>

      <footer>
        <Rodape/>
      </footer>
    </>
  );
}
