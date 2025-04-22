import style from "./Contato.module.css";

export default function Contato() {
  return (
    <div className={style.Contato}>
      <h2>Contato</h2>
      <p>Entre em contato conosco para dúvidas, sugestões e parcerias.</p>
      <p>E-mail: tiagojeronimodev@gmail.com</p>

      <p>
        <a
          href="https://wa.me/5541984518235"
          target="_blank"
          rel="noopener noreferrer"
          className={style.linkZap}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <img
            src="/whats.png"
            alt="WhatsApp"
            width="24"
            height="24"
            style={{ objectFit: "contain" }}
          />
          Fale conosco no WhatsApp
        </a>
      </p>

      <p>
        <a
          href="https://www.instagram.com/ticorunning"
          target="_blank"
          rel="noopener noreferrer"
          className={style.linkZap}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <img
            src="/instagram.jpeg"
            alt="Instagram"
            width="24"
            height="24"
            style={{ objectFit: "contain" }}
          />
          Siga no Instagram
        </a>
      </p>
    </div>
  );
}
