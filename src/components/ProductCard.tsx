import styles from './ProductCard.module.css';
import { ProductType } from '../types';
import { formatPrice } from '../utils';

interface ProductProps {
  product: ProductType,
  onClick: (id: number) => void
}

export const ProductCard = ({ product: { title, id, price, image }, onClick }: ProductProps) =>
  <div onClick={() => onClick(id)} className={styles.card}>
    <div className={styles.productImage} style={{ backgroundImage: `url(${image})` }}></div>
    <h5>{title} <br /> <a>{formatPrice(price)} </a></h5>
  </div>
