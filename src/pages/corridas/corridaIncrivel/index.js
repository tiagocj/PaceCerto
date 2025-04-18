import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from './corridaIncrivel.module.css';

export default function corridaIncrivel() {
  return (
    <main className="p-4">
      <div className={styles['imagem-wrapper']}>
  <div className={styles['imagem-container']}>
    <Image
      src="/corridaIncrivel.png"
      alt="Corrida Incrivel"
      fill
      className={styles['imagem-estilo']}
      priority
    />
  </div>
</div>
      <h1 className="text-2xl font-bold mb-4">Corrida Incrível</h1>
      <section className={styles['info-grid']}>
        <div className={styles['card']}>
          <h2>📅 Data & Local</h2>
          <p><strong>Data:</strong> 22/06/2025</p>
          <p><strong>Local:</strong> Curitiba, PR-Brasil</p>
        </div>

        <div className={styles['card']}>
          <h2>🏃‍♂️ Distâncias</h2>
          <p>05 km | 10 km</p>
        </div>

        <div className={styles['card']}>
          <h2>📝 Inscrições</h2>
          <p>Até 17/06/2025 12:00h ou até esgotar as vagas</p>
          <p>Transferência de titularidade e categoria conforme regulamento</p>
        </div>
      </section>

      <a
              href="https://www.ticketsports.com.br/e/corrida-incrivel-71960"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
  >           Inscreva-se
      </a>

      <section className="mb-6">
          
  <h2 className="text-xl font-semibold mb-2">Localização no mapa</h2>
  <div className="w-full h-96">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208575.85569608508!2d-49.454610801111684!3d-25.494714579223796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cdb3dd%3A0x6d2f6ba5bacbe809!2sCuritiba%2C%20PR!5e1!3m2!1spt-BR!2sbr!4v1744997446260!5m2!1spt-BR!2sbr"width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
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
