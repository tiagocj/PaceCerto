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
          <p><strong>Horário:</strong> ...</p>
          <p><strong>Local:</strong>CURITIBA: Curitiba, PR, Brasil</p>
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
            <li><strong>Horário da largada:</strong>CURITIBA: Curitiba, PR, Brasil</li>
            <li><strong>Local:</strong>CURITIBA: Curitiba, PR, Brasil</li>
            <li><strong>Distâncias:</strong> 5 km e 10 km</li>
          </ul>
            
            <Link href="/">
                <button>Página inicial</button>
            </Link>

        </section>
      </main>
      

    )
}