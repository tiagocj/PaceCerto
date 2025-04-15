import Link from "next/link";
import Image from "next/image";
import styles from './meiaMaratonaDeCuritiba.module.css';

export default function meiaCuritiba(){
    return(
      <main className="corrida-detalhes">
        <section className={styles['imagem-wrapper']}>
        <div className={styles['imagem-container']}>
        <Image
         src="/Banner-Thome-2.jpg"
         alt="Meia maratona de Curitiba"
         fill
         className={styles['imagem-estilo']}
         priority
        />
  </div>
</section>
        
        <h1>Meia Maratona Internacional de Curitiba</h1>
      
        <section className={styles['info-grid']}>
        <div className={styles['card']}>
          <h2>📅 Data & Local</h2>
          <p><strong>Data:</strong> 15/06/2025</p>
          <p><strong>Horário:</strong> A definir</p>
          <p><strong>Local:</strong> Pedreira Paulo Leminski, R. João Gava, 970 - Abranches, Curitiba - PR</p>
        </div>

        <div className={styles['card']}>
          <h2>🏃‍♂️ Distâncias</h2>
          <p>5 km | 11 km | 21 km</p>
        </div>

        <div className={styles['card']}>
          <h2>🎽 Kit do Atleta</h2>
          <p>Kit Básico: Número de peito e chip eletrônico.<br/>
           Kit Plus: Kit básico + Camiseta. <br/>
           Kit Premium – Kit Básico + Camiseta + jaqueta. <br/>
           Kit TS SPA:  Kit Básico, Camiseta, Recovery Completo. <br/>
           kit TS SPA PREMIUM: Kit Básico + Camiseta + Jaqueta + recovery completo. </p>
        </div>
      </section>

      <section>
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
      title="Mapa da corrida"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.123407266564!2d-49.27699202375666!3d-25.51723617855198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5ef7c1fc7cd%3A0xe5a06e7b36bc6e33!2sR.%20Jo%C3%A3o%20Gava%2C%20970%20-%20Abranches%2C%20Curitiba%20-%20PR%2C%2082081-040!5e0!3m2!1spt-BR!2sbr!4v1711139302266!5m2!1spt-BR!2sbr"
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