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
      alt="Meia maratona de Curitiba"
      fill
      className={styles['imagem-estilo']}
      priority
    />
  </div>
</div>
      <h1 className="text-2xl font-bold mb-4">3ª Corrida da Cavalaria</h1>
      <p>
      A III Corrida da Cavalaria é uma realização do Batalhão de Cavalaria da Polícia Militar do Paraná, com organização técnica da Assessocor Assessoria Esportiva.<br/> A prova acontecerá no dia 04 de maio de 2025 (domingo), com largada às 7h, em frente ao Regimento de Cavalaria Montada, em Curitiba/PR.<br/><br/>

Endereço: Rua Konrad Adenauer, 1166 – Tarumã – Curitiba/PR<br/>
Distâncias:<br/>

Corrida principal: 7 km<br/>

Corrida Kids: 3 a 14 anos<br/>

Inscrições<br/>
As inscrições são pessoais e intransferíveis. Valores variam por categoria e lote:<br/><br/>

Categoria POLÍCIA MILITAR<br/>
Com apresentação de Identidade Militar<br/>

Lote Promocional (07/02 a 01/03): R$ 59,90<br/>

1º Lote (02/03 a 02/04): R$ 64,90<br/>

2º Lote (03/04 a 27/04): R$ 74,90<br/>

Categoria COMUNIDADE<br/>
Lote Promocional (07/02 a 01/03): R$ 64,90<br/>

1º Lote (02/03 a 02/04): R$ 69,90<br/>

2º Lote (03/04 a 27/04): R$ 79,90<br/><br/>

Categoria KIDS (3 a 14 anos)<br/>
Valor único: R$ 49,90<br/><br/>

Kit do Atleta<br/>
Cada kit inclui:<br/>

Número de Peito Personalizado<br/>

Chip eletrônico descartável<br/>

Medalha finisher<br/>

Hidratação<br/>

Frutas de época<br/>

Bebida energética<br/>

Itens opcionais (à parte):<br/>

Camiseta manga curta: R$ 45,00<br/>

Camiseta manga longa: R$ 75,00<br/>

Boné oficial: R$ 45,00<br/><br/>

Premiação<br/>
Categoria Comunidade<br/>
Geral Masculino e Feminino: Troféu para os 5 primeiros<br/>

Faixas etárias (3 primeiros): 15-19, 20-24, 25-29, ..., até 65+<br/>

Categoria Militar<br/>
Geral Masculino e Feminino: Troféu para os 5 primeiros<br/>

Faixas etárias (3 primeiros): 18-29, 30-39, 40-49, 50+<br/>

Corrida Kids<br/>
Participação simbólica (sem premiação por faixa etária)<br/>

Importante: Não haverá dupla premiação.<br/>

Informações Importantes<br/>
Encerramento das inscrições: 27/04/2025 ou até atingir o limite de vagas.<br/>

Retirada dos kits: Local e data a definir (sem entrega no dia da prova).<br/>

Desconto de 50%: para atletas com 60 anos ou mais, mediante documento.<br/>


      </p>

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
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6522.121404718609!2d-49.217937!3d-25.418552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5914cee2f15%3A0xd3948156963b6f2d!2sRegimento%20de%20Pol%C3%ADcia%20Montada%20-%20Pol%C3%ADcia%20Militar!5e1!3m2!1spt-BR!2sbr!4v1744276835682!5m2!1spt-BR!2sbr"width="100%"
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
