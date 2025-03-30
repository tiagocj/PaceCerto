'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Topo.module.css';

export default function Topo() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.topo}>
      <div className={styles.logo}>Pace Certo</div>

      <button className={styles.menuToggle} onClick={toggleMenu}>
        {menuAberto ? 'Fechar' : 'Menu'}
      </button>

      <nav>
        <ul className={`${styles.menu} ${menuAberto ? styles.ativo : ''}`}>
          <li><Link href="#corridas">Corridas</Link></li>
          <li><Link href="#dicas">Dicas</Link></li>
          <li><Link href="#parcerias">Parcerias</Link></li>
          <li><Link href="#contato">Contato</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}
