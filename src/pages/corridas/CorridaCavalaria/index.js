import Link from "next/link";
import Image from "next/image";
import styles from './corridaCavalaria.module.css';

export default function corridaCavalaria() {
  return (
    <main className="p-4">
      <div className={styles['imagem-wrapper']}>
  <div className={styles['imagem-container']}>
    <Image
      src="/corridaCavalaria.jpg"
      alt="Corrida da Cavalaria"
      fill
      className={styles['imagem-estilo']}
      priority
    />
  </div>
</div>
      <h1 className="text-2xl font-bold mb-4">3ª Corrida da Cavalaria</h1>
      <section className={styles['info-grid']}>
        <div className={styles['card']}>
          <h2>📅 Data & Local</h2>
          <p><strong>Data:</strong> 04/05/2025</p>
          <p><strong>Horário:</strong> 07:00h</p>
          <p><strong>Local:</strong> R. Konrad Adenauer, 1166, Curitiba-PR</p>
        </div>

        <div className={styles['card']}>
          <h2>🏃‍♂️ Distâncias</h2>
          <p>07 km</p>
        </div>

        <div className={styles['card']}>
          <h2>🏅 Premiação</h2>
          <p><strong>Masculino Geral Comunidade</strong> Troféus 5 primeiros colocados</p>
          <p><strong>Feminino Geral Comunidade</strong> Troféus 5 primeiros colocados</p>
          <p><strong>Categoroia Comunidade</strong> Serão premiados nas faixas etárias os 03 primeiros colocados Masculino e Feminino conforme faixas etárias</p>
        </div>

        <div className={styles['card']}>
          <h2>📝 Inscrições</h2>
          <p>Até 27/04/2025 ou até esgotar as vagas</p>
          <p>Transferência de titularidade e categoria conforme regulamento</p>
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
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.060844838461!2d-49.22051222494846!3d-25.41854673243799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5914cee2f15%3A0xd3948156963b6f2d!2sRegimento%20de%20Pol%C3%ADcia%20Montada%20-%20Pol%C3%ADcia%20Militar!5e1!3m2!1spt-BR!2sbr!4v1744918310848!5m2!1spt-BR!2sbr"width="100%"
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
