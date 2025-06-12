'use client';
import Link from "next/link";
import styles from "./Card.module.css";
import Topo from "../Topo";

export default function Card() {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "32px" }}>Calendário de Corridas</h2>
      
      <div className={styles.container}>

        <div className={styles.card}>
          <p><strong>Meia maratona de Curitiba</strong></p>
          <img src="/meiaCuritiba.png" alt="Meia Maratona de Curitiba" />
          <p>15/06/2025</p>
          <strong><p>Curitiba</p></strong>
          <strong><p>05 km | 11 km | 21 Km</p></strong>
          <Link href="/corridas/meiaMaratonaDeCuritiba" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>3ª Etapa Corridas Curitiba</strong></p>
          <img src="/corridasSaoJose.png" alt="Corridas Curitiba" />
          <p>22/06/2025</p>
          <strong><p>São José dos Pinhais</p></strong>
          <strong><p>05 km | 10 Km</p></strong>
          <Link href="/corridas/corridasCuritiba" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>Corrida Incrível 2025</strong></p>
          <img src="/corridaIncrivel.png" alt="Corrida do Forte" />
          <p>22/06/2025</p>
          <p><strong>Curitiba</strong></p>
          <strong><p>05 km | 10 Km |</p></strong>
          <Link href="/corridas/corridaIncrivel" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>15 k de Santa</strong></p>
          <img src="/santa15.jpeg" alt="15 k de Santa" />
          <p>06/07/2025</p>
          <strong><p>Curitiba</p></strong>
          <strong><p>5.5 km | 15 Km</p></strong>
          <Link href="/corridas/corrida15ksanta" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>XIII CORRIDA DA RONE</strong></p>
          <img src="/corridaRoneBaner.png" alt="Corrida da Rone" />
          <p>27/07/2025</p>
          <strong><p>Curitiba</p></strong>
          <strong><p>07 Km</p></strong>
          <Link href="/corridas/corridaDaRone" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        

        <div className={styles.card}>
          <p><strong>CORRIDAS SANEPAR</strong></p>
          <img src="/sanepar.png" alt="Corrida do Forte" />
          <p>07/12/2025</p>
          <p><strong>Curitiba</strong></p>
          <strong><p> KIDS | 05 km | 10 Km |</p></strong>
          <Link href="/corridas/corridasSanepar" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

      </div>
    </div>
  );
}
