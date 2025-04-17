import Link from "next/link";
import Image from 'next/image';
import styles from './corridasSanepar.module.css';

export default function corridaSesi(){
    return(
        <main className="corrida-detalhes">
<section className={styles['imagem-wrapper']}>
  <div className={styles['imagem-container']}>
    <Image
      src="/sanepar.png"
      alt="Primeira corrida nacional do Sesi"
      fill
      className={styles['imagem-estilo']}
      priority
    />
  </div>
</section>
        <h1>CORRIDAS SANEPAR - CURITIBA</h1>
      
        <section className={styles['info-grid']}>
        <div className={styles['card']}>
          <h2>📅 Data & Local</h2>
          <p><strong>Data:</strong> 07/12/2025</p>
          <p><strong>Horário:</strong> 07:00 h</p>
          <p><strong>Local:</strong> Av. Dário Lopes dos Santos, nº 500 - Curitiba-PR</p>
        </div>

        <div className={styles['card']}>
          <h2>🏃‍♂️ Distâncias</h2>
          <p>KIDS, 5 km, 10 km</p>
        </div>

        

        

        <div className={styles['card']}>
          <h2>📝 Inscrições</h2>
          <p>Até 01/12/2025 ou até esgotar as vagas</p>
        </div>
      </section>

      <section>
          <h2>Informações gerais</h2>
          <ul>
            <li><strong>Data:</strong> 07/12/2025 de abril de 2025</li>
            <li><strong>Horário da largada:</strong> 07:00 h</li>
            <li><strong>Local: </strong>Av. Dário Lopes dos Santos, nº 500 - Curitiba-PR</li>
            <li><strong>Distâncias:</strong> 5 km e 10 km</li>
          </ul>
          <a
              href="https://www.ticketsports.com.br/e/CORRIDAS%20SANEPAR%20-%20ETAPA%20CURITIBA-70696"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
  >           Inscreva-se
          </a>
        </section>
        <section>
          <Link href="/">
            <button>Página inicial</button>
          </Link>
        </section>
      </main>
      

    )
}