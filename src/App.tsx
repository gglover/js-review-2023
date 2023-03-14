import ProductList from './components/ProductList';
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.app}>
        <header>
          <nav>
            <h1 className={styles.logo}>FAKE STORE LLC</h1>
          </nav>
        </header>
        <ProductList />
        <footer>
        </footer>
      </div>
    </>
  )
}

export default App;