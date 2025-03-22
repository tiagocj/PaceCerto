import Link from "next/link";

export default function decimaNonaCorridaNoturna(){
    return(
        <main className="corrida-detalhes">
  <h1>2ª Etapa – Circuito de Corridas Curitiba 2025</h1>

  <section>
    <h2>Corrida com propósito</h2>
    <p>
      No dia <strong>20 de abril</strong>, Curitiba recebe a segunda etapa do <strong>Circuito de Corridas Curitiba 2025</strong>, unindo esporte e solidariedade em um só movimento. Nesta edição, o destaque fica por conta da parceria com o <strong>Hospital Universitário Cajuru</strong>, que leva para as pistas uma causa social: a promoção da saúde e o incentivo à qualidade de vida.
    </p>

    <p>
      Mais do que uma corrida, o evento transforma a cidade em um palco de energia, inclusão e consciência. A cada quilômetro, a campanha reforça a importância da prevenção, da saúde mental e do combate às doenças crônicas.
    </p>
  </section>

  <section>
    <h2>Correndo e cuidando</h2>
    <p>
      O <strong>HUC</strong> é o único hospital 100% SUS de urgência e emergência em Curitiba, atendendo mais de <strong>150 mil pessoas por ano</strong>. Com o apoio do evento, recursos das inscrições serão revertidos para programas sociais da instituição.
    </p>

    <p>
      A corrida também se torna palco de conscientização sobre o papel da atividade física na prevenção de doenças e no aumento da qualidade de vida. Um evento que une esporte, saúde e impacto social real.
    </p>
  </section>

  <section>
    <h2>Informações da prova</h2>
    <ul>
      <li><strong>Data:</strong> 20 de abril de 2025</li>
      <li><strong>Local:</strong> Av. Dário Lopes dos Santos, 500 – Jardim Botânico, Curitiba/PR</li>
      <li><strong>Largadas:</strong></li>
      <ul>
        <li>06h30 – 5 km</li>
        <li>07h30 – 10 km e caminhada</li>
        <li>09h00 – Kids</li>
      </ul>
    </ul>
    <Link href="/">
        <button>Página inicial</button>
    </Link>
  </section>
</main>

      

    )
}