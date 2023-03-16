import styles from './ProductCard.module.css';
import { ProductType } from '../types';
import { formatPrice } from '../utils';

interface ProductProps {
  product: ProductType,
  onClick: (id: number) => void
}

const ProductCard: React.FC<ProductProps> = ({
  product: { title, id, price, image }, 
  onClick
}) => {
  return (
    <div onClick={() => onClick(id)} className={styles.card}>
      <div
        className={styles.productImage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h5>{title} <br /> <a>{formatPrice(price)} </a></h5>
    </div>
  );
}

export default ProductCard;
