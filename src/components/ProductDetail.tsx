import { ProductType } from '../types';
import { formatPrice } from '../utils';
import styles from './ProductDetail.module.css';

interface ProductDetailProps {
  product: ProductType
}

export const ProductDetail = ({ product: { image, description, title, price } }: ProductDetailProps) => (
  <div className={styles.panel}>
    <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
    <div className={styles.detail}>
      <h3>{ title }</h3>
      <p>{ description }</p>
      <a>{ formatPrice(price) }</a>
    </div>
  </div>
);