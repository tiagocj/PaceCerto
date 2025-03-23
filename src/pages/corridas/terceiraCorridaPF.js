import Link from "next/link";

export default function TerceiraCorridaPF() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">3ª Corrida PF - Curitiba</h1>
      <p>
        A 3ª Corrida PF é uma realização da ASPF-PR com coordenação da Leme Sports.
        O evento será realizado no dia 06 de abril de 2025.
      </p>

      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Voltar para a página inicial
        </button>
      </Link>
    </main>
  );
}
