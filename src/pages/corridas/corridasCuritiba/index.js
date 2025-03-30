import Link from "next/link";
import Image from "next/image";
import styles from './corridasCuritiba.module.css';

export default function decimaNonaCorridaNoturna(){
    return(
      
        <main className="corrida-detalhes">
        <section className={styles['imagem-wrapper']}>
          <div className={styles['imagem-container']}>
            <Image
              src="/corridascuritiba2025.jpg"
              alt="Corridas Curitiba"
              fill
              className={styles['imagem-estilo']}
              priority
            />
          </div>
        </section>
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
    <a
              href="https://www.thomeesantos.com.br/meia-maratona-internacional-de-curitiba-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
  >           Inscreva-se
            </a>
            <section className="mb-6">
          
          <h2 className="text-xl font-semibold mb-2">Localização no mapa</h2>
          <div className="w-full h-96">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.080787771573!2d-49.245389624907246!3d-25.452762333928305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce447ab4b4073%3A0x8fb21f03a42cba5c!2sAv.%20Dr.%20D%C3%A1rio%20Lopes%20dos%20Santos%2C%20500%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR%2C%2082020-360!5e0!3m2!1spt-BR!2sbr!4v1711380435001!5m2!1spt-BR!2sbr"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
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