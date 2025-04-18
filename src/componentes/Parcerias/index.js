import Head from 'next/head';
import styles from './Parcerias.module.css';
import Link from 'next/link';

export default function Parcerias() {
  return (
    <>
      <Head>
        <title>Parcerias - Pace Certo</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.titulo}>Parcerias e Recomendações</h1>
        <p className={styles.descricao}>
          Produtos recomendados para corredores. Comprando por esses links da Shopee, você apoia o projeto <strong>Pace Certo</strong> sem pagar nada a mais!
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Tênis de Corrida</h2>
            <p>Confortável e acessível para seus treinos.</p>
            <a href="https://shopee.com.br/link-do-tenis" target="_blank" rel="noopener noreferrer">Ver na Shopee</a>
          </div>

          <div className={styles.card}>
            <h2>Relógio Esportivo</h2>
            <p>Controle seu tempo e pace nos treinos.</p>
            <a href="https://shopee.com.br/link-do-relogio" target="_blank" rel="noopener noreferrer">Ver na Shopee</a>
          </div>

          <div className={styles.card}>
            <h2>Cinto de Hidratação</h2>
            <p>Perfeito para longões e provas de rua.</p>
            <a href="https://shopee.com.br/link-do-cinto" target="_blank" rel="noopener noreferrer">Ver na Shopee</a>
          </div>

          <div className={styles.card}>
            <h2>Massageador Muscular</h2>
            <p>Ajuda na recuperação pós-treino.</p>
            <a href="https://shopee.com.br/link-do-massageador" target="_blank" rel="noopener noreferrer">Ver na Shopee</a>
          </div>
        </div>

        <div className={styles.voltar}>
         <Link href="/">← Voltar para o início</Link>
        </div>
      </main>
    </>
  );
}
