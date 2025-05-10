import Link from "next/link";
import Image from 'next/image';
import styles from './corridaDoArtilheiro.module.css'; // não esquece de importar os estilos

export default function corridaDoArtilheiro() {
  return (
    <main className="p-4">
      <section className={styles['imagem-wrapper']}>
  <div className={styles['imagem-container']}>
    <Image
      src="/artilharia.png"
      alt="XXI Corrida do artilheiro"
      fill
      className={styles['imagem-estilo']}
      priority
    />
  </div>
</section>
      <h1 className="text-2xl font-bold mb-4">XXI Corrida do Artilheiro</h1>

      <section className={styles['info-grid']}>
        <div className={styles['card']}>
          <h2>📅 Data & Local</h2>
          <p><strong>Data:</strong>08/06/2025</p>
          <p><strong>Horário:</strong> 07:00</p>
          <p><strong>Local:</strong>5º GAC AP - Grupo Salomão da Rocha - Av. Mal. Floriano Peixoto, 9190 - Boqueirão, Curitiba - PR</p>
        </div>

        <div className={styles['card']}>
          <h2>🏃‍♂️ Distâncias</h2>
          <p>5 km | 10km</p>
        </div>

        <div className={styles['card']}>
          <h2>🎽 Kit básico do Atleta</h2>
          <p>- Kit cronometragem</p>
          <p>- Hidratação</p>
          <p>- Seguro atleta</p>
          <p>- Medalha</p>
        </div>
      </section>

      {/* Seção de inscrição */}
      <section>
        <a
          href="https://www.ticketsports.com.br/e/XXI%20CORRIDA%20DOR%20ARTILHEIRO%202025-72396"
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.665245028367!2d-49.2375601249449!3d-25.506970335940974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbf705534c0b%3A0x2fbefaba842a3790!2s5%C2%BA%20GAC%20AP%20-%20Grupo%20Salom%C3%A3o%20da%20Rocha!5e1!3m2!1spt-BR!2sbr!4v1746904805434!5m2!1spt-BR!2sbr"
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
