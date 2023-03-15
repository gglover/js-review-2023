import store from '../store';
import styles from './ProductList.module.css';
import utilStyles from '../assets/utils.module.css';
import cn from 'clsx';
import { useCallback } from 'react';
import { observer } from 'mobx-react';
import { ProductCard } from './ProductCard';
import { Modal } from './Modal';
import { ProductDetail } from './ProductDetail';

const Loading = () => <h3>Loading...</h3>;

interface ResultsProps {
  count: number,
  query?: string
}

const ResultsText = ({count, query}: ResultsProps) => {
  let resultsText;
  if (count) {
    resultsText = `Showing results for ${ count } ${ count === 1 ? 'product' : 'products' }.`
  } else {
    resultsText = "No results found."
  }

  return <i>{ resultsText }</i>
}

function ProductList() {
  const { products, selectedProduct, productCount, setSelectedProductId } = store;

  const onCloseDetail = useCallback(() => {
    store.setSelectedProductId(-1);
  }, []);
  
  if (products.length == 0) {
    return <Loading />;
  }

  return (
    <div className={cn(styles.list, utilStyles.blurOverlay, { [utilStyles.blurOverlayEnabled]: selectedProduct })}>
      <ResultsText count={productCount} />
      <Modal open={!!selectedProduct} onClose={onCloseDetail}>
        {selectedProduct && <ProductDetail product={selectedProduct} />}
      </Modal>
      <div className={styles.results}>
        {products.map(product => <ProductCard
          key={product.id}
          product={product}
          onClick={setSelectedProductId}
          />)}
      </div>
    </div>
  )
}

export default observer(ProductList);
