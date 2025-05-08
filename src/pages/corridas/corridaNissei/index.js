import Link from "next/link";
import Image from "next/image";
import styles from './corridaNissei.module.css';

export default function corridaNissei() {
  return (
    <main className="p-4">
      <div className={styles['imagem-wrapper']}>
  <div className={styles['imagem-container']}>
    <Image
      src="/nissei.png"
      alt="3 corrida nissei"
      fill
      className={styles['imagem-estilo']}
      priority
    />
  </div>
</div>
      <h1 className="text-2xl font-bold mb-4">3ª Nissei Run</h1>
      <section className={styles['info-grid']}>
        <div className={styles['card']}>
          <h2>📅 Data & Local</h2>
          <p><strong>Data:</strong> 08/06/2025</p>
          <p><strong>Horário:</strong> 07:00h</p>
          <p><strong>Local:</strong> Rua Buenos Aires, 1260, Curitiba-PR, Brasil</p>
        </div>

        <div className={styles['card']}>
          <h2>🏃‍♂️ Distâncias</h2>
          <p>05 | 07 km</p>
        </div>

        <div className={styles['card']}>
          <h2>🏅 Premiação</h2>
          <p>Serão premiados com troféu os três primeiros colocados de cada categoria</p>
        </div>

        <div className={styles['card']}>
          <h2>📝 Inscrições</h2>
          <p>Até o dia 01 de junho de 2025, enquanto houver vagas disponíveis.</p>
        </div>
      </section>

      <a
              href="https://assessocor.online/evento/3acorrida-da-cavalaria-2025/669"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
  >           Inscreva-se
      </a>

      <section className="mb-6">
          
  <h2 className="text-xl font-semibold mb-2">Localização no mapa</h2>
  <div className="w-full h-96">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.2580204848996!2d-49.2769866!3d-25.448211599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce476c516477b%3A0x4d03657ac0bc148c!2sLigga%20Arena!5e1!3m2!1spt-BR!2sbr!4v1746731384926!5m2!1spt-BR!2sbr" width="100%"
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
