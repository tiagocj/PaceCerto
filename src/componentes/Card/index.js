'use client';
import Link from "next/link";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "32px" }}>Calendário de Corridas</h2>
      
      <div className={styles.container}>
        <div className={styles.card}>
          <p><strong>Meia maratona de Curitiba</strong></p>
          <img src="/meiaCuritiba.png" alt="Meia Maratona de Curitiba" />
          <p>15/06/2025</p>
          <p>Curitiba</p>
          <Link href="/corridas/meiaMaratonaDeCuritiba" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>

        <div className={styles.card}>
          <p><strong>19ª Corrida noturna</strong></p>
          <img src="/corridanoturna.jpg" alt="Corrida Noturna" />
          <p>12/04/2025</p>
          <p>Curitiba</p>
          <Link href="/corridas/decimaNonaCorridaNoturna" legacyBehavior>
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
          <p><strong>3ª Corrida da polícia federal</strong></p>
          <img src="/policiafederal.jpg" alt="Corrida PF" />
          <p>06/04/2025</p>
          <p>Curitiba</p>
          <Link href="/corridas/terceiraCorridaPF" legacyBehavior>
            <a><button>Informações</button></a>
          </Link>
        </div>
      </div>
    </div>
  );
}
