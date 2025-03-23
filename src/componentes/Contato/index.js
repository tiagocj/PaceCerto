import style from "./Contato.module.css";

export default function Contato() {
  return (
    <div className={style.Contato}>
      <h2>Contato</h2>
      <p>Entre em contato conosco para dúvidas, sugestões e parcerias.</p>
      <p>E-mail: tiagojeronimodev@gmail.com</p>

      <p>
        {" "}
        <a
          href="https://wa.me/5541984518235"
          target="_blank"
          rel="noopener noreferrer"
          className={style.linkZap}
        >
          Fale conosco no WhatsApp
        </a>
      </p>
    </div>
  );
}
