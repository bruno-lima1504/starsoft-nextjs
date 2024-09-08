import styles from "./card.module.scss";
import { SiEthereum } from "react-icons/si";

export default function Card() {
  return (
    <div className={styles.card}>
      <img
        src="https://softstar.s3.amazonaws.com/items/boots-of-speed.png"
        alt="Boots of Speed"
      />

      <h3>Boots of Speed</h3>
      <p>
        Botas feitas de couro fino e tecido élfico, imbuidas com encantamentos
        mágicos que conferem velocidade sobrenatural a quem as usa, permitindo
        movimentos ágeis e fugas rápida.
      </p>
      <div className={styles.price}>
        <span className={styles.icon}>
          <SiEthereum />
        </span>
        <span>182 ETH</span>
      </div>
      <button className={styles["buy-button"]}>COMPRAR</button>
    </div>
  );
}
