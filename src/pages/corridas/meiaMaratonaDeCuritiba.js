import Link from "next/link";

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
          <Link href="/">
            <button>Página inicial</button>
        </Link>
        </section>
      </main>
      
    )
}