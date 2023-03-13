import store from '../store';
import { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Product } from './Product';
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
    <>
      <i>Showing { productCount } { productCount === 1 ? 'product' : 'products' }.</i>
      {selectedProduct && 
        <Modal open onClose={onCloseDetail}>
          <ProductDetail product={selectedProduct} />
        </Modal>
      }
      {products.map(product => <Product
        key={product.id}
        product={product}
        onSelect={setSelectedProductId}
      />)}
    </>
  )
}

export default observer(ProductList);
