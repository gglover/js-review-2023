import ProductList from './components/ProductList';
import Button from './components/Button';
import { Bag } from './components/icons';
import styles from './App.module.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <h1 className={styles.logo}>FAKE STORE LLC</h1>
          <Button circular icon={<Bag/>}></Button>
        </nav>
      </header>

      <ProductList />

      <footer>
      </footer>
    </>
  )
}

export default App;