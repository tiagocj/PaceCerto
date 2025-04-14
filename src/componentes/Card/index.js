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
          <strong><p>05 km | 10 km | 21 Km</p></strong>
          <Link href="/corridas/meiaMaratonaDeCuritiba" legacyBehavior>
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
          <p><strong>Corridas Curitiba</strong></p>
          <img src="/corridascuritiba.jpg" alt="Corridas Curitiba" />
          <p>24/04/2025</p>
          <p>Curitiba</p>
          <Link href="/corridas/corridasCuritiba" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>XIII CORRIDA DA RONE</strong></p>
          <img src="/corridaRoneBaner.png" alt="Corrida da Rone" />
          <p>27/07/2025</p>
          <p>Curitiba</p>
          <Link href="/corridas/corridaDaRone" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>Corrida do Forte 2025</strong></p>
          <img src="/forte.jpg" alt="Corrida do Forte" />
          <p>13/04/2025</p>
          <p>Curitiba</p>
          <Link href="/corridas/corridaDoForte" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>1ª Corrida Nacional do SESI</strong></p>
          <img src="/sesicorrida.jpg" alt="Corrida do Forte" />
          <p>01/05/2025</p>
          <p>Curitiba</p>
          <Link href="/corridas/corridaDoForte" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>Circuito de Corridas Procorrer</strong></p>
          <img src="/procorrer.jpg" alt="Procorrer" />
          <p>04/05/2025</p>
          <p>Curitiba</p>
          <Link href="/corridas/corridaDoForte" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>3ª Corrida da Cavalaria</strong></p>
          <img src="/corridaCavalaria.jpg" alt="Corrid da Cavalaria IMG" />
          <p>04/05/2025</p>
          <p>Curitiba</p>
          <Link href="/corridas/corridaCavalaria" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

      </div>
    </div>
  );
}
