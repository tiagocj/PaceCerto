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
  {/* Meta tags essenciais */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Título com foco em SEO local */}
  <title>Pace Certo - Corridas de Rua no Paraná</title>

  {/* Descrição rica em palavras-chave */}
  <meta
    name="description"
    content="O Pace Certo é o guia de corridas de rua no Paraná. Veja datas, locais e inscrições para provas em Curitiba, Maringá, Londrina e outras cidades."
  />

  {/* Palavras-chave opcionais (alguns dizem que o Google ignora, mas Bing ainda usa) */}
  <meta
    name="keywords"
    content="corridas de rua Paraná, calendário de corridas Curitiba, meia maratona Londrina, provas de 5km Maringá, correr no Paraná"
  />

  {/* Autor (opcional, mas pode reforçar identidade) */}
  <meta name="author" content="Tiago Jerônimo" />

  {/* Google Ads para monetização */}
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
          <p>Quer começar a correr no Paraná? O Pace Certo ajuda você a encontrar corridas em cidades como Curitiba, Ponta Grossa, Londrina e Maringá. Atualizamos nosso calendário constantemente!</p>
        </section>

        <section>
          {/* Placeholder para parcerias - conteúdo futuro */}
          <p>Em breve, também traremos dicas de treinos, estratégias para melhorar seu pace e depoimentos de atletas locais. Fique de olho!</p>
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
