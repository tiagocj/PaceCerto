import Link from "next/link";
import Image from 'next/image';
import styles from './corridaSesi.module.css';

export default function corridaSesi(){
    return(
        <main className="corrida-detalhes">
  <section className={styles['imagem-wrapper']}>
  <div className={styles['imagem-container']}>
    <Image
      src="/sesicorrida.jpg"
      alt="Primeira corrida nacional do Sesi"
      fill
      className={styles['imagem-estilo']}
      priority
    />
  </div>
</section>
        <h1>1ª Corrida Nacional do SESI</h1>
      
        <section>
          <h2>Um evento para correr e celebrar</h2>
          <p>
            Prepare-se para uma noite de energia, luzes e movimento! A Corrida Noturna Unimed Curitiba chega à sua <strong>19ª edição</strong> em 2025, reunindo atletas de todos os níveis em um ambiente vibrante e cheio de vida. Mais do que uma competição, essa prova é um convite à saúde, ao bem-estar e à diversão.
          </p>
      
          <p>
            Com percursos de <strong>5 km</strong> e <strong>10 km</strong>, o evento é perfeito tanto para quem está começando quanto para quem busca novos desafios. A largada acontecerá em um dos pontos mais icônicos da cidade: a <strong>Ligga Arena</strong>.
          </p>
      
          <p>
            Coloque sua melhor energia na pista e venha fazer parte dessa noite inesquecível!
          </p>
        </section>
      
        <section>
          <h2>Informações gerais</h2>
          <ul>
            <li><strong>Data:</strong> 12 de abril de 2025</li>
            <li><strong>Horário da largada:</strong> em breve</li>
            <li><strong>Local:</strong> Ligga Arena – Curitiba/PR</li>
            <li><strong>Distâncias:</strong> 5 km e 10 km</li>
          </ul>
            
            <Link href="/">
                <button>Página inicial</button>
            </Link>

        </section>
      </main>
      

    )
}