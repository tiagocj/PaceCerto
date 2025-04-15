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
          <p><strong>Data:</strong> 01 de junho de 2025</p>
          <p><strong>Horário:</strong> 07:00</p>
          <p><strong>Local:</strong> Praça Afonso Botelho – Curitiba/PR</p>
        </div>

        <div className={styles['card']}>
          <h2>🏃‍♂️ Distâncias</h2>
          <p>3 km (caminhada), 5 km, 10 km</p>
        </div>

        <div className={styles['card']}>
          <h2>🏅 Premiação</h2>
          <p><strong>10 km:</strong> Troféus geral e por categoria</p>
          <p><strong>5 km:</strong> Troféus para os 3 primeiros da geral</p>
          <p><strong>Caminhada:</strong> Sem premiação</p>
        </div>

        <div className={styles['card']}>
          <h2>🎽 Kit do Atleta</h2>
          <p>Número de peito, chip, hidratação e medalha</p>
        </div>

        <div className={styles['card']}>
          <h2>📝 Inscrições</h2>
          <p>Até 23/05/2025 ou até esgotar as vagas</p>
          <p>Transferência de titularidade e categoria conforme regulamento</p>
        </div>
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