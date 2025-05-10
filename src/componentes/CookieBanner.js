import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      <p>
        Ao navegar nesse site, você aceita os cookies que usamos para melhorar sua experiência.
        <a href="/politica-de-privacidade" target="_blank"> Políticas de Privacidade</a>
      </p>
      <button onClick={handleAccept}>ENTENDI</button>
    </div>
  );
}
