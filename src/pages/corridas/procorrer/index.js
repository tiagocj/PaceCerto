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
      
        <section>
          <h2>Um evento para correr e celebrar</h2>
          <p>
            Prepare-se para uma noite de energia, luzes e movimento! A Corrida Noturna Unimed Curitiba chega à sua <strong>19ª edição</strong> em 2025, reunindo atletas de todos os níveis em um ambiente vibrante e cheio de vida. Mais do que uma competição, essa prova é um convite à saúde, ao bem-estar e à diversão.
          </p>
      
          <p>
            Com percursos de <strong>5 km</strong> e <strong>10 km</strong>, o evento é perfeito tanto para quem está começando quanto para quem busca novos desafios. A largada acontecerá em um dos pontos mais icônicos da cidade: a <strong>Ligga Arena</strong>.
          </p>
      
          <p>
            Coloque sua melhor energia na pista e venha fazer parte dessa noite inesquecível!
          </p>
        </section>
      
        <section>
          <h2>Informações gerais</h2>
          <ul>
            <li><strong>Data:</strong> 12 de abril de 2025</li>
            <li><strong>Horário da largada:</strong> em breve</li>
            <li><strong>Local:</strong> Ligga Arena – Curitiba/PR</li>
            <li><strong>Distâncias:</strong> 5 km e 10 km</li>
          </ul>

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