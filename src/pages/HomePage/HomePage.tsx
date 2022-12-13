import {
  useAppSelector as useSelector,
} from "../../hooks";
import type { RootState } from "../../store";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import ProductCard from "./ProductCard";
import styles from "./HomePage.module.scss";

function HomePage() {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.container_left}>
          <div className={styles.products}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default HomePage;
