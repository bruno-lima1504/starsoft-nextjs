import { useState } from "react";
import styles from "./header.module.scss";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "../Cart";
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../../redux/cart/slice";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const productsCount = useSelector(selectTotalQuantity);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img
            src="/logo.png"
            width={90}
            height={35}
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
          <nav className={styles.menuNav}>
            <button onClick={toggleCart}>
              <AiOutlineShopping size={24} color="var(--primary-color)" />
              <span className={styles.productCount}>{productsCount}</span>
            </button>
          </nav>
        </div>
      </header>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
}
