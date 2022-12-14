import { useState } from "react";

import { useAppSelector as useSelector } from "../../../hooks";
import type { RootState } from "../../../store";
import CartAmount from "../CartAmount";
import Cart from "../../Cart";
import { CloseIcon } from "../../Icon";

import styles from "./CartMenu.module.scss";

const CartMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div onClick={toggleMobileMenu}>
        <CartAmount amount={totalAmount} />
      </div>

      <div className={`${styles.menu} ${isOpen ? styles.menu_open : ""}`}>
        <div onClick={toggleMobileMenu} className={styles.close}>
          <CloseIcon />
        </div>
        <Cart />
      </div>
    </>
  );
};

export default CartMenu;
