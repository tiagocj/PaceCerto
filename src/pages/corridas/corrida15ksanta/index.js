import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image';
import styles from './santa15k.module.css';

export default function corrida15ksanta(){
    return(
        <main className="corrida-detalhes">
  <section className={styles['imagem-wrapper']}>
   <div className={styles['imagem-container']}>
    <Image
      src="/folder15k.png"
      alt="15 k de santa"
      fill
      className={styles['imagem-estilo']}
      priority
    />
   </div>
  </section>
        <h1>15 k de Santa</h1>
      
        <section className={styles['info-grid']}>
        <div className={styles['card']}>
          <h2>📅 Data & Local</h2>
          <p><strong>Data:</strong> 06/07/2025</p>
          <p><strong>Horário:</strong> 07:00</p>
          <p><strong>Local:</strong> Av. Manoel Ribas, 6121 – Curitiba/PR</p>
        </div>

        <div className={styles['card']}>
          <h2>🏃‍♂️ Distância</h2>
          <p>5.5 km | 15 km</p>
        </div>
      </section>

      <section>
        <h2>Informações gerais</h2>
        <ul>
          <li><strong>Data:</strong>06/07/2025</li>
          <li><strong>Horário da largada:</strong> A definir</li>
          <li><strong>Local:</strong> Av. Manoel Ribas, 6121 – Curitiba/PR</li>
          <li><strong>Distâncias:</strong> 5.5 km | 15 km</li>
        </ul>
        <a
              href="https://www.ticketsports.com.br/e/15k-de-santa-inverno-2025-71947?termo=&periodo=0&mes=0&inicio=&fim=&ordenacao=padrao&pais=Brasil"
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.4585112518917!2d-49.33354872494897!3d-25.40384073185657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1a5b4f0d4c3%3A0xb328b9d1487b2b9a!2sAv.%20Manoel%20Ribas%2C%206121%20-%20Santa%20Felicidade%2C%20Curitiba%20-%20PR%2C%2082400-000!5e1!3m2!1spt-BR!2sbr!4v1748808710574!5m2!1spt-BR!2sbr"
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