import {
  useAppSelector as useSelector,
} from "../../hooks";
import type { RootState } from "../../store";
import CartItem from "./CartItem";
import { TAX, SHIPPING_AMOUNT } from "../../shared/constans";
import styles from "./Cart.module.scss";

function Cart() {
  const { cart,  totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  const products = Object.values(cart);

  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <h3>My Basket</h3>
        <div className={styles.products}>
          {products.map((product) => (
            <CartItem product={product} key={product.id}/>
          ))}
        </div>
      </div>
      <div className={styles.container_bottom}>
        <div>
          <p>Subtotal</p>
          <p>Tax</p>
          <p>Shipping</p>
          <h3>Total</h3>
        </div>
        <div className={styles.price_right}>
          <p>{`$ ${totalPrice}`}</p>
          <p>{`$ ${TAX}`}</p>
          <p>{`$ ${SHIPPING_AMOUNT}`}</p>
          <h3>{`$ ${totalPrice + TAX + SHIPPING_AMOUNT}`}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
