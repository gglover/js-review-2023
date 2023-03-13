import { action, makeObservable, computed, observable, autorun } from "mobx";
import { ProductType } from './types';

class ProductStore {
  products: ProductType[] = [];
  selectedProductId: number = -1;

  constructor() {
    makeObservable(this, {
      products: observable,
      selectedProductId: observable,

      productCount: computed,
      selectedProduct: computed,

      setProducts: action.bound,
      setSelectedProductId: action.bound
    });

    autorun(() => {
      console.log(`selected product name: ${this.selectedProduct?.title}`);
    });
  }

  get productCount() {
    return this.products.length;
  }

  get selectedProduct() {
    return this.products.find(product => product.id === this.selectedProductId);
  }

  setProducts(products: ProductType[]) {
    this.products = products;
  }

  setSelectedProductId(id: number) {
    this.selectedProductId = id;
  }
}

const store = new ProductStore();

fetch('https://fakestoreapi.com/products?limit=8')
  .then(res => res.json())
  .then((products: ProductType[]) => store.setProducts(products));

export default store;
