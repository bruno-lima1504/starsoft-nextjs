import styles from "./header.module.scss";
import { AiOutlineShopping } from "react-icons/ai";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo.png" width={90} height={50} />

        <nav className={styles.menuNav}>
          <button>
            <AiOutlineShopping size={24} color="var(--primary-color)" />
          </button>
        </nav>
      </div>
    </header>
  );
}
