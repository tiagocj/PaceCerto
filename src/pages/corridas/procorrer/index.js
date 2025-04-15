import Link from "next/link";
import Image from 'next/image';
import styles from './procorrer.module.css';

export default function procorrer(){
    return(
        <main className="corrida-detalhes">
  <section className={styles['imagem-wrapper']}>
  <div className={styles['imagem-container']}>
    <Image
      src="/procorrer.jpg"
      alt="Circuito de Corridas ProCorrer"
      fill
      className={styles['imagem-estilo']}
      priority
    />
  </div>
</section>
        <h1>Circuito de Corridas ProCorrer</h1>
      
        <section className={styles['info-grid']}>
        <div className={styles['card']}>
          <h2>📅 Data & Local</h2>
          <p><strong>Data:</strong> 04/05/2025</p>
          <p><strong>Horário:</strong> 07:00</p>
          <p><strong>Local:</strong> Praça Afonso Botelho – Curitiba/PR</p>
        </div>

        <div className={styles['card']}>
          <h2>🏃‍♂️ Distância</h2>
          <p>5 km</p>
        </div>
      </section>

      <section>
        <h2>Informações gerais</h2>
        <ul>
          <li><strong>Data:</strong> 04/05/2025</li>
          <li><strong>Horário da largada:</strong> A definir</li>
          <li><strong>Local:</strong> Praça Afonso Botelho – Curitiba/PR</li>
          <li><strong>Distâncias:</strong>05 km</li>
        </ul>
        <a
              href="https://www.ticketsports.com.br/e/circuito-procorrer-de-corrida-71198"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
  >           Inscreva-se
          </a>
      </section>
      
        <section>
                <section className="mb-6">
          
          <h2 className="text-xl font-semibold mb-2">Localização no mapa</h2>
          <div className="w-full h-96">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.2957407905724!2d-49.27743502494719!3d-25.446818533556733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce47cb70204eb%3A0xad3e32c61b823d31!2sPra%C3%A7a%20Afonso%20Botelho!5e1!3m2!1spt-BR!2sbr!4v1744745260563!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
            
            <Link href="/">
                <button>Página inicial</button>
            </Link>

        </section>
      </main>
      

    )
}