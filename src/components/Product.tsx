import { ProductType } from '../types';
import { formatPrice } from '../utils';

interface ProductProps {
  product: ProductType,
  onSelect: (id: number) => void
}

export const Product = ({ product: { title, id, price }, onSelect }: ProductProps) => 
  <div>
    <h5>{title} – <a onClick={() => onSelect(id)}>
      {formatPrice(price)}
    </a></h5>
  </div>
