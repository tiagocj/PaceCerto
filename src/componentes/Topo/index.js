import style from "./Topo.module.css";

export default function Topo() {
  return (
    <header className={style.topo}>
      <h1 className={style.logo}>Pace Certo</h1>
      <nav>
        <ul className={style.menu}>
          <li><a href="#corridas">Corridas</a></li>
          <li><a href="#dicas">Dicas</a></li>
          <li><a href="#parcerias">Parcerias</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
