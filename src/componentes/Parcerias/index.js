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
          Produtos recomendados para corredores. Comprando por esses links da Shopee, você apoia o projeto <strong>Pace Certo</strong> 
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img
              src="/afiliados/mochilaHidratacao.webp"
              alt="Mochila de Hidratação"
              className={styles.cardImage}
            />
            <h2>Mochila de Hidratação</h2>
            <p>Confortável e acessível para seus treinos.</p>
            <a href="https://shopee.com.br/product/309830846/4677270554?uls_trackid=52gia9ab003j&utm_campaign=id_1056yUCB92Q&utm_content=----&utm_medium=affiliates&utm_source=an_18351280401&utm_term=cvrmy15n2go1" target="_blank" rel="noopener noreferrer">Ver na Shopee</a>
          </div>

          <div className={styles.card}>
            <img
              src="/afiliados/foneConducao.webp"
              alt="Mochila de Hidratação"
              className={styles.cardImage}
            />
            <h2>Fones De Ouvido Sem Fio Ambie</h2>
            <p>Fone de condução óssea</p>
            <a href="https://shopee.com.br/product/464675363/21999227581?uls_trackid=52gic8070122&utm_campaign=id_mKpx4sQKm2&utm_content=----&utm_medium=affiliates&utm_source=an_18351280401&utm_term=cvrog9x7i9gs" target="_blank" rel="noopener noreferrer">Ver na Shopee</a>
          </div>

          <div className={styles.card}>
            <img
              src="/afiliados/cintoNumero.webp"
              alt="Cinto Porta Número"
              className={styles.cardImage}
            />
            <h2>Cinto de Hidratação</h2>
            <p>Perfeito para longões e provas de rua.</p>
            <a href="https://shopee.com.br/product/741636280/17347060882?uls_trackid=52gid59d002j&utm_campaign=id_WmPS6hBbTe&utm_content=----&utm_medium=affiliates&utm_source=an_18351280401&utm_term=cvrp686o1agw" target="_blank" rel="noopener noreferrer">Ver na Shopee</a>
          </div>

          <div className={styles.card}>
            <img
              src="/afiliados/top.webp"
              alt="Cinto Porta Número"
              className={styles.cardImage}
            />
            <h2>Top Fitness</h2>
            <p>Top em tecido suplex ideal para academia e dia a dia.</p>
            <a href="https://shopee.com.br/product/785036194/22820068942?uls_trackid=52gieclj01v8&utm_campaign=id_11vEAAF5BNS&utm_content=----&utm_medium=affiliates&utm_source=an_18351280401&utm_term=cvrq4f3nws1q" target="_blank" rel="noopener noreferrer">Ver na Shopee</a>
          </div>

          <div className={styles.card}>
            <img
              src="/afiliados/shorts.webp"
              alt="Shorts Para Corrida"
              className={styles.cardImage}
            />
            <h2>Shorts Para Corrida</h2>
            <p>Shorts BLACKOUT Ciclico Esportes.</p>
            <a href="https://shopee.com.br/product/1033390854/21397274952?uls_trackid=52gig0na00v8&utm_campaign=id_zExQiSk0vS&utm_content=----&utm_medium=affiliates&utm_source=an_18351280401&utm_term=cvrrczasmddq" target="_blank" rel="noopener noreferrer">Ver na Shopee</a>
          </div>

          <div className={styles.card}>
            <img
              src="/afiliados/shortsMasculino.webp"
              alt="Shorts Para Corrida"
              className={styles.cardImage}
            />
            <h2>Bermuda Masculina Para Corrida</h2>
            <p>Bermuda de Compressão Ciclico</p>
            <a href="https://shopee.com.br/product/1033390854/18298967176?uls_trackid=52gihdv40110&utm_campaign=id_V54wSaH0na&utm_content=----&utm_medium=affiliates&utm_source=an_18351280401&utm_term=cvrsfz4hxwjd" target="_blank" rel="noopener noreferrer">Ver na Shopee</a>
          </div>
        </div>

        

        <div className={styles.voltar}>
         <Link href="/">← Voltar para o início</Link>
        </div>
      </main>
    </>
  );
}
