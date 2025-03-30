import Head from "next/head";
// Importa o componente de card com informações de corridas
import Card from "@/componentes/Card";
// Importa a seção de boas-vindas
import BoasVindas from "@/componentes/BoasVindas";
// Menu de navegação (provavelmente fixo ou no topo)
import Menu from "@/componentes/Menu";
// Rodapé do site
import Rodape from "@/componentes/Rodape";
// Formulário ou informações de contato
import Contato from "@/componentes/Contato";
// Topo visual ou gráfico do site (ex: banner, imagem)
import Topo from "@/componentes/Topo";
// Ferramenta da Vercel para medir performance
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <Head>
        {/* Meta tags para charset e responsividade */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Título que aparece na aba do navegador */}
        <title>Pace Certo - Corridas de Rua</title>

        {/* Script do Google Ads para monetização */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9081276319826306"
          crossOrigin="anonymous">
        </script>
      </Head>

      {/* Conteúdo principal da página */}
      <main>
        <section>
          {/* Seção de boas-vindas ao usuário */}
          <BoasVindas />
        </section>

        <section id="corridas">
          {/* Cards com informações sobre corridas */}
          <Card />
        </section>

        <section>
          {/* Placeholder para dicas - conteúdo futuro */}
          <p>Dicas em breve...</p>
        </section>

        <section>
          {/* Placeholder para parcerias - conteúdo futuro */}
          <p>Parcerias em breve...</p>
        </section>

        <section id="contato">
          {/* Formulário ou informações de contato */}
          <Contato />

          {/* Monitoramento de performance do site pela Vercel */}
          <SpeedInsights />
        </section>
      </main>
    </>
  );
}
