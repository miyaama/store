import { CartProduct } from "../../../store/slices";
import { DeleteIcon, PlusIcon, MinusIcon } from "../../Icon";
import { removeItem, addItem, deleteItem } from "../../../store/slices";
import {
  useAppDispatch as useDispatch,
} from "../../../hooks";
import styles from "./CartItem.module.scss";

interface Props {
  product: CartProduct;
}

function CartItem({ product }: Props) {
  const dispatch = useDispatch();

  const onDeleteItem = () => {
    dispatch(deleteItem(product));
  };

  const onAddItem = () => {
    dispatch(addItem(product));
  };

  const onRemoveItem = () => {
    dispatch(removeItem(product));
  };

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <img
          alt="product"
          src={product.url}
          className={styles.product_image}
        ></img>
        <div className={styles.product_right}>
          <p>{product.name}</p>
          <div className={styles.amount_container}>
            <button onClick={onRemoveItem}>
              <MinusIcon />
            </button>
            <p className={styles.amount}>{product.amount}</p>
            <button onClick={onAddItem}>
              <PlusIcon />
            </button>
            <p className={styles.price}>{`$ ${
              product.price * product.amount
            }`}</p>
          </div>
        </div>
      </div>
      <button onClick={onDeleteItem}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default CartItem;
