import { useParams, useNavigate } from "react-router-dom";

import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../../hooks";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import { CartIcon } from "../../components/Icon";
import styles from "./ProductPage.module.scss";
import type { RootState } from "../../store";
import { addItem } from "../../store/slices";

function ProductPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products.products);

  const navigate = useNavigate();

  if (!id) {
    return null;
  }

  const product = products.filter((item) => item.id === +id)[0];

  const onAddItem = () => {
    dispatch(addItem(product));
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.container_left}>
          <div className={styles.product}>
            <button className={styles.back_button} onClick={goBack}>
              Back in catalog
            </button>
            <img
              alt="product"
              src={product.url}
              className={styles.product_image}
            ></img>
            <h2>{product?.name}</h2>
            <p>{`Item model number: ${product?.id}`}</p>
            <div className={styles.price_container}>
              <button className={styles.product_button} onClick={onAddItem}>
                <CartIcon color="white" />
              </button>
              <span className={styles.price}>{`$ ${product.price}`}</span>
            </div>
          </div>
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default ProductPage;
