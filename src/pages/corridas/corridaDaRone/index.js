import Link from "next/link";
import Image from 'next/image';
import styles from './corridaDaRone.module.css'; // não esquece de importar os estilos

export default function corridaDaRone() {
  return (
    <main className="p-4">
      <section className={styles['imagem-wrapper']}>
  <div className={styles['imagem-container']}>
    <Image
      src="/corridaRoneBaner.png"
      alt="Primeira corrida nacional do Sesi"
      fill
      className={styles['imagem-estilo']}
      priority
    />
  </div>
</section>
      <h1 className="text-2xl font-bold mb-4">XIII CORRIDA DA RONE</h1>

      <section className={styles['info-grid']}>
        <div className={styles['card']}>
          <h2>📅 Data & Local</h2>
          <p><strong>Data:</strong>27/07/2025</p>
          <p><strong>Horário:</strong> 07:00</p>
          <p><strong>Local:</strong> Quartel do Comando Geral da Polícia Militar do Paraná: Av. Mal. Floriano Peixoto - Rebouças, 1401, Curitiba-PR</p>
        </div>

        <div className={styles['card']}>
          <h2>🏃‍♂️ Distâncias</h2>
          <p>7 km</p>
        </div>

        <div className={styles['card']}>
          <h2>🎽 Kit do Atleta</h2>
          <p>Número de peito, chip, hidratação e medalha</p>
        </div>
      </section>

      {/* Seção de inscrição */}
      <section>
        <a
          href="https://www.ticketsports.com.br/e/XIII%20CORRIDA%20DA%20RONE-72050"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold underline hover:text-blue-800"
        >
          Inscreva-se
        </a>
      </section>

      {/* Seção do mapa */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Localização no mapa</h2>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6520.842325714111!2d-49.266222!3d-25.442186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce466e2723c5b%3A0xba1cecf0be14463a!2sQuartel%20do%20Comando%20Geral%20da%20Pol%C3%ADcia%20Militar%20do%20Paran%C3%A1!5e1!3m2!1spt-BR!2sbr!4v1744247387816!5m2!1spt-BR!2sbr"
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
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Página inicial
        </button>
      </Link>
    </main>
  );
}
