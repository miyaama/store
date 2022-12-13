import { Link } from "react-router-dom";

import { useAppDispatch as useDispatch } from "../../../hooks";
import { CartIcon } from "../../../components/Icon";
import styles from "./ProductCard.module.scss";
import { addItem } from "../../../store/slices";
import { ProductType } from "../../../store/slices";

interface Props {
  product: ProductType;
}

function ProductCard({ product }: Props) {
  const dispatch = useDispatch();

  const onAddItem = () => {
    dispatch(addItem(product));
  };

  return (
    <div className={styles.container}>
      <img
        alt="product"
        src={product.url}
      ></img>
      <Link to={`/${product.id}`}>
        <h4>{product.name}</h4>
      </Link>
      <div className={styles.container_bottom}>
        <button className={styles.product_button} onClick={onAddItem}>
          <CartIcon color="white" />
        </button>
        <span>{`$ ${product.price}`}</span>
      </div>
    </div>
  );
}

export default ProductCard;
