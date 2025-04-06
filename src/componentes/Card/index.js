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

      </div>
    </div>
  );
}
