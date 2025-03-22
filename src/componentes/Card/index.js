'use client';
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  function exibirAlerta(){
    alert('Corrida')
  }

    return (
      <div>
        <h2>Calendário de Corridas</h2>
          <div id="corridas-container">
          <div className="card">
            <p>Meia maratona de Curitiba</p>
            <img src="/meiaCuritiba.png" alt="Meia Maratona de Curitiba" />
            <p>15/06/2025</p>
            <p>Curitiba</p>
            <Link href="/corridas/meiaMaratonaDeCuritiba" legacyBehavior>
              <a>
                <button>Informações</button>
              </a>
            </Link>
          </div>
  
          <div className="card">
            <p>19ª Corrida noturna</p>
            <img src="/corridanoturna.jpg" alt="Corrida Noturna" />
            <p>12/04/2025</p>
            <p>Curitiba</p>
            <Link href="/corridas/decimaNonaCorridaNoturna" legacyBehavior>
              <a>
                <button>Informações</button>
              </a>
            </Link>
          </div>
  
          <div className="card">
            <p>Corridas Curitiba</p>
            <img src="/corridascuritiba.jpg" alt="Corridas Curitiba" />
            <p>24/04/2025</p>
            <p>Curitiba</p>
            <Link href="/corridas/corridasCuritiba" legacyBehavior>
              <a>
                <button>Informações</button>
              </a>
            </Link>
          </div>
  
          <div className="card">
            <p>3ª Corrida da polícia federal</p>
            <img src="/policiafederal.jpg" alt="3ª Corrida da polícia federal" />
            <p>06/04/2025</p>
            <p>Curitiba</p>
            <Link href="/corridas/meiaMaratonaDeCuritiba" legacyBehavior>
              <a>
                <button>Informações</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  