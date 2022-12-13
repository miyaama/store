import { CartIcon } from "../../Icon";
import styles from "./CartAmount.module.scss";

interface Props {
  amount?: number;
}

function CartAmount({ amount }: Props) {
  return (
    <div className={styles.container}>
      <CartIcon />
      {amount
        ? amount > 0 && <span className={styles.counter}>{amount}</span>
        : null}
    </div>
  );
}

export default CartAmount;
