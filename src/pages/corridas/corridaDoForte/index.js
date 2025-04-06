import Link from "next/link";
import Image from "next/image";
import styles from './corridaDoForte.module.css';

export default function corridaDoForte(){
    return(
      
        <main className="corrida-detalhes">
        <section className={styles['imagem-wrapper']}>
          <div className={styles['imagem-container']}>
            <Image
              src="/forte.jpg"
              alt="Corrida do Forte"
              fill
              className={styles['imagem-estilo']}
              priority
            />
          </div>
        </section>
  <h1>Corrida Do Forte 2025</h1>

  <section>
    <h2>Corrida e aventura</h2>
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
    <a
              href="https://minhasinscricoes.com.br/Evento/CorridadoForte2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
  >           Inscreva-se
            </a>
            <section className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Localização no mapa</h2>
  <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.3197351321987!2d-49.30616342494391!3d-25.52772443676482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfc92cde108db%3A0xb6129879fc29a3c0!2sComando%20da%205%C2%AA%20Regi%C3%A3o%20Militar%20do%20Ex%C3%A9rcito%20-%20Forte%20Pinheirinho!5e0!3m2!1spt-BR!2sbr!4v1743966872464!5m2!1spt-BR!2sbr"
      className="absolute top-0 left-0 w-full h-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</section>
    <Link href="/">
        <button>Página inicial</button>
    </Link>
  </section>
</main>

      

    )
}