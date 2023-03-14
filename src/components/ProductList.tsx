import store from '../store';
import styles from './ProductList.module.css';
import { useCallback } from 'react';
import { observer } from 'mobx-react';
import { ProductCard } from './ProductCard';
import { Modal } from './Modal';
import { ProductDetail } from './ProductDetail';

const Loading = () => <h3>Loading...</h3>;

function ProductList() {
  const { products, selectedProduct, productCount, setSelectedProductId } = store;

  const onCloseDetail = useCallback(() => {
    store.setSelectedProductId(-1);
  }, []);
  
  if (products.length == 0) {
    return <Loading />;
  }

  return (
    <div className={styles.list}>
      <i>Showing results for { productCount } { productCount === 1 ? 'product' : 'products' }.</i>
      {selectedProduct && 
        <Modal open onClose={onCloseDetail}>
          <ProductDetail product={selectedProduct} />
        </Modal>
      }
      <div className={styles.results}>
        {products.map(product => <ProductCard
          key={product.id}
          product={product}
          onSelect={setSelectedProductId}
          />)}
      </div>
    </div>
  )
}

export default observer(ProductList);
