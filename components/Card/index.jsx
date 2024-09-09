import Button from "../ui/Button";
import styles from "./card.module.scss";
import { SiEthereum } from "react-icons/si";

import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart/slice";

import { useState } from "react";

export default function Card({ data }) {
  const [purchased, setPurchased] = useState(false);
  const dispatch = useDispatch();

  function handleProduct() {
    dispatch(addProduct(data));
    setPurchased(true);
  }
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
      <Button
        onClick={handleProduct}
        title={purchased ? "ADICIONADO AO CARRINHO" : "COMPRAR"}
      />
    </div>
  );
}
