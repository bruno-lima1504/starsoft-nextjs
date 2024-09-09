import style from "./cart.module.scss";
import CartItem from "components/Cart-item";
import Button from "components/ui/Button";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";

import { useSelector } from "react-redux";

export default function Cart({ isOpen, toggleCart }) {
  const [finish, setFinish] = useState(false);
  const { cart, totalPrice } = useSelector((rootReducer) => rootReducer.cart);
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains(style.backdrop)) {
      toggleCart();
    }
  };

  function handleFinishPurchased() {
    setFinish(true);
  }

  return (
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div className={style.cartContainer}>
        <div className={style.cartHeader}>
          <button onClick={toggleCart}>
            <AiOutlineArrowLeft size={24} color="#ff9500" />
          </button>
          <p>Mochila de Compras</p>
        </div>
        <div className={style.cartBody}>
          {cart.length > 0 ? (
            cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <p className={style.price}>Seu carrinho está vazio!</p>
          )}
        </div>
        <div className={style.priceContainer}>
          <p>TOTAL</p>
          <div className={style.price}>
            <span className={style.icon}>
              <SiEthereum />
            </span>
            <p>{totalPrice} ETH</p>
          </div>
        </div>
        <Button
          onClick={handleFinishPurchased}
          title={!finish ? "FINALIZAR COMPRA" : "COMPRA FINALIZADA"}
        />
      </div>
    </div>
  );
}
