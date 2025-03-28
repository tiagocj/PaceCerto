import Link from "next/link";

export default function terceiraCorridaPF() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">3ª Corrida PF - Curitiba</h1>
      <p>
        A 3ª CORRIDA PF é promovida pela ASPF-PR (Associação dos Servidores da Polícia Federal de Curitiba), com coordenação técnica da Leme Sports Eventos Esportivos.

        A competição contará com percursos de 5 km, 10 km, caminhada de 2 km e corrida infantil, e será realizada na cidade de Curitiba/PR. O principal objetivo do evento é incentivar a prática de atividades físicas, promovendo saúde, bem-estar físico e mental, além de qualidade de vida.

        A corrida acontecerá no dia 06 de abril de 2025, com largada na Avenida Dario Lopes, ao lado do Estádio Durival de Britto e Silva – Curitiba/PR.
      </p>

      <a
              href="https://www.ticketsports.com.br/e/3-corrida-da-policia-federal-71368"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold underline hover:text-blue-800"
  >           Inscreva-se
      </a>

      <section className="mb-6">
          
  <h2 className="text-xl font-semibold mb-2">Localização no mapa</h2>
  <div className="w-full h-96">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.7427419747522!2d-49.25748379413522!3d-25.439234130020548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce45bb53bec17%3A0x4070a7dc1e20a9cf!2sEst%C3%A1dio%20Durival%20Britto%20e%20Silva%20-%20Vila%20Capanema!5e0!3m2!1spt-BR!2sbr!4v1743153403634!5m2!1spt-BR!2sbr"
    className="w-full h-full border-0"
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
