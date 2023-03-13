import { ProductType } from '../types';
import styles from './ProductDetail.module.css';

interface ProductDetailProps {
  product: ProductType
}

export const ProductDetail = ({ product }: ProductDetailProps) => (
  <div className={styles.productDetail}>
    <h4>{ product.description }</h4>
  </div>
);