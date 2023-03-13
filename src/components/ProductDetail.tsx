import { ProductType } from '../types';

interface Props {
  product: ProductType
}

export const ProductDetail = ({ product }: Props) => (
  <h4>{ product.description }</h4>
);