import style from "./cart-item.module.scss";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";

import { useDispatch } from "react-redux";
import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "../../redux/cart/slice";

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  function handleDecrease() {
    dispatch(decreaseProduct(product.id));
  }

  function handleIncrease() {
    dispatch(increaseProduct(product.id));
  }

  function handleDecrease() {
    dispatch(decreaseProduct(product.id));
  }

  function handleRemove() {
    dispatch(removeProduct(product.id));
  }

  return (
    <div className={style.cartItem}>
      <img src={product.image} alt={product.name} />
      <div className={style.itemDetails}>
        <p className={style.title}>{product.name}</p>
        <p className={style.description}>{product.description}</p>

        <div className={style.price}>
          <span className={style.icon}>
            <SiEthereum />
          </span>
          <p>{product.price}</p>
        </div>

        <div className={style.interact}>
          <div className={style.productQuantity}>
            <button
              onClick={handleDecrease}
              className={style.productQuantityItem}
            >
              <AiOutlineMinus size={10} color="var(--white)" />
            </button>
            <span className={style.productQuantityItem}>
              {product.quantity}
            </span>
            <button
              onClick={handleIncrease}
              className={style.productQuantityItem}
            >
              <AiOutlinePlus size={10} color="var(--white)" />
            </button>
          </div>
          <button onClick={handleRemove} className={style.deleteButton}>
            <AiOutlineDelete size={26} color="var(--white)" />
          </button>
        </div>
      </div>
    </div>
  );
}
