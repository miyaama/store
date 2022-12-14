import { Link } from "react-router-dom";

import { LogoIcon } from "../Icon";
import CartMenu from "./MobileCartMenu/CartMenu";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <Link to="/">
        <LogoIcon />
      </Link>

      <CartMenu />
    </header>
  );
}

export default Header;
