import Link from "next/link";
import Image from 'next/image';
import styles from './corridaPoliciaCientifica.module.css';

export default function corridaPoliciaCientifica() {
  return (
    <main className="corrida-detalhes">
      <section className={styles['imagem-wrapper']}>
        <div className={styles['imagem-container']}>
          <Image
            src="/cardpoliciacientifica.webp"
            alt="Corrida Polícia Científica do Paraná"
            fill
            className={styles['imagem-estilo']}
            priority
          />
        </div>
      </section>

      <h1>Corrida Polícia Científica do Paraná</h1>

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
          <li><strong>Data:</strong> 01 de junho de 2025</li>
          <li><strong>Horário da largada:</strong> 07:00 am</li>
          <li><strong>Local:</strong> Praça Afonso Botelho – Curitiba/PR</li>
          <li><strong>Distâncias:</strong> 03 km | 05 km | 10 km</li>
        </ul>
      </section>

      <section className={styles['mapa']}>
        <h2>📍 Localização no mapa</h2>
        <div className={styles['mapa-container']}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.282757501555!2d-49.27633502494722!3d-25.447298033575663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4634a3f65a3%3A0x46c8ac17393fe706!2sPra%C3%A7a%20Afonso%20Botelho%20%26%20Rua%20Engenheiros%20Rebou%C3%A7as%20-%20Rebou%C3%A7as%2C%20Curitiba%20-%20PR%2C%2082590-300!5e1!3m2!1spt-BR!2sbr!4v1744576339932!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/">
          <button>Página inicial</button>
        </Link>
      </div>
    </main>
  );
}
