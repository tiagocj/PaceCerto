import Link from "next/link";
import Image from "next/image";
import styles from './corridasCuritiba.module.css';

export default function decimaNonaCorridaNoturna(){
    return(
      
        <main className="corrida-detalhes">
        <section className={styles['imagem-wrapper']}>
          <div className={styles['imagem-container']}>
            <Image
              src="/corridasCuritibaTerceiraEtapa.png"
              alt="Corridas Curitiba"
              fill
              className={styles['imagem-estilo']}
              priority
            />
          </div>
        </section>
  <h1>3ª Etapa – Circuito de Corridas Curitiba 2025</h1>

  <section className={styles['info-grid']}>
        <div className={styles['card']}>
          <h2>📅 Data & Local</h2>
          <p><strong>Data:</strong> 22/06/2025</p>
          <p><strong>Horário:</strong> A definir</p>
          <p><strong>Local:</strong> PARQUE SÃO JOSÉ: Av. das Torres, 100 - Uberaba, São José dos Pinhais-PR</p>
        </div>

        <div className={styles['card']}>
          <h2>🏃‍♂️ Distâncias</h2>
          <p>3 km (caminhada) | 5 km | 10 km</p>
        </div>

        <div className={styles['card']}>
          <h2>🎽 Kit do Atleta</h2>
          <p>Número de peito, chip, hidratação e medalha</p>
        </div>

        <div className={styles['card']}>
          <h2>📝 Inscrições</h2>
          <p>Até 22/06/2025 ou até esgotar as vagas</p>
        </div>
      </section>

  <section>
    <h2>Informações da prova</h2>
    <ul>
      <li><strong>Data:</strong> 22/06/2025</li>
      <li><strong>Local:</strong> PARQUE SÃO JOSÉ: Av. das Torres, 100 - Uberaba, São José dos Pinhais-PR</li>
    </ul>
    <a
              href="https://www.ticketsports.com.br/e/CORRIDAS%20CURITIBA%202025%20-%20ETAPA%203-72045"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
  >           Inscreva-se
            </a>
            <section className="mb-6">
          
          <h2 className="text-xl font-semibold mb-2">Localização no mapa</h2>
          <div className="w-full h-96">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.5092551235603!2d-49.20546002494464!3d-25.512718136169116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfa78b84b9d3f%3A0x465d8f7954a9f650!2zUGFycXVlIFPDo28gSm9zw6k!5e1!3m2!1spt-BR!2sbr!4v1744744814962!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
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