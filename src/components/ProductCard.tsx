import styles from './ProductCard.module.css';
import { ProductType } from '../types';
import { formatPrice } from '../utils';

interface ProductProps {
  product: ProductType,
  onSelect: (id: number) => void
}

export const ProductCard = ({ product: { title, id, price, image }, onSelect }: ProductProps) => 
  <div onClick={() => onSelect(id)} className={styles.card}>
    <div style={{ backgroundImage: `url(${image})`}}></div>
    <h5>{title} <br/> <a>{formatPrice(price)} </a></h5>
  </div>
