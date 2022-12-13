import { Link } from "react-router-dom";

import { useAppSelector as useSelector } from "../../hooks";
import type { RootState } from "../../store";
import { LogoIcon } from "../Icon";
import CartAmount from "./CartAmount";
import styles from "./Header.module.scss";

function Header() {
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  
  return (
    <header className={styles.container}>
      <Link to="/">
        <LogoIcon />
      </Link>
      <CartAmount amount={totalAmount} />
    </header>
  );
}

export default Header;
