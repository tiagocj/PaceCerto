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
          <p><strong>Circuito de Corridas Procorrer</strong></p>
          <img src="/procorrer.jpg" alt="Procorrer" />
          <p>04/05/2025</p>
          <p><strong>Curitiba</strong></p>
          <strong><p>05 km</p></strong>
          <Link href="/corridas/procorrer" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>3ª Corrida da Cavalaria</strong></p>
          <img src="/corridaCavalaria.jpg" alt="Corrid da Cavalaria IMG" />
          <p>04/05/2025</p>
          <p><strong>Curitiba</strong></p>
          <strong><p>07 km</p></strong>
          <Link href="/corridas/corridaCavalaria" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>Corrida da Polícia Científica</strong></p>
          <img src="/policiacientifica.webp" alt="Corrida da polícia científica do Paraná" />
          <p>01/06/2025</p>
          <strong><p>Curitiba</p></strong>
          <strong><p>03 km | 05 km | 10 Km</p></strong>
          <Link href="/corridas/corridaPoliciaCientifica" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

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
