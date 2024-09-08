import Button from "../ui/Button";
import styles from "./card.module.scss";
import { SiEthereum } from "react-icons/si";

export default function Card({ data }) {
  return (
    <div className={styles.card}>
      <img src={data.image} alt="Boots of Speed" />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <div className={styles.price}>
        <span className={styles.icon}>
          <SiEthereum />
        </span>
        <span>{data.price} ETH</span>
      </div>
      <Button title="COMPRAR" />
    </div>
  );
}
