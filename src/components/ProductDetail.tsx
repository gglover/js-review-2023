import { ProductType } from '../types';
import { formatPrice } from '../utils';
import styles from './ProductDetail.module.css';

interface ProductDetailProps {
  product: ProductType
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { image, description, title, price } = product;

  return (
    <div className={styles.panel}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={styles.detail}>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <a>{ formatPrice(price) }</a>
        <br/>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;