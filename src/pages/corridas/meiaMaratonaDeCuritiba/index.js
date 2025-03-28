import Link from "next/link";
import styles from './meiaMaratonaDeCuritiba.module.css';

export default function meiaCuritiba(){
    return(
        <main className="corrida-detalhes">
        
        <h1>Meia Maratona Internacional de Curitiba</h1>
      
        <section>
          <h2>Sobre o Evento</h2>
          <p>
            A Meia Maratona Internacional de Curitiba é mais do que uma prova: é um verdadeiro festival de saúde, superação e energia! Em sua edição de 2025, o evento espera reunir <strong>10 mil corredores</strong> pelas ruas da capital paranaense.
          </p>
          <p>
            Com percursos para todos os níveis — <strong>5 km, 11 km e 21 km</strong> — a prova é uma excelente oportunidade tanto para quem está começando na corrida de rua quanto para os apaixonados por longas distâncias. E tudo isso com o apoio institucional da Prefeitura de Curitiba e a organização da <strong>Thomé e Santos Eventos Esportivos</strong>.
          </p>
        </section>
      
        <section>
          <h2>A Prova</h2>
          <p><strong>Data:</strong> 15 de junho de 2025</p>
          <p>
            <strong>Largada e chegada:</strong><br />
            <strong>Pedreira Paulo Leminski</strong><br />
            Rua João Gava, 970 – Abranches, Curitiba/PR
          </p>
      
          <h3>Largadas (horários a confirmar):</h3>
          <ul>
            <li>21 km – Elite Feminina e PCD</li>
            <li>21 km – Elite Masculina</li>
            <li>21 km – Categoria Geral</li>
            <li>11 km e 5 km – Categoria Geral</li>
          </ul>
      
          <p>
            <strong>Tempo limite para os 21 km:</strong> 3 horas
          </p>
      
          <h3>Pontos de corte (a confirmar):</h3>
          <ul>
            <li>5 km</li>
            <li>10 km</li>
            <li>15 km</li>
            <li>21 km</li>
          </ul>
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