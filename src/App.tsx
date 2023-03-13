import ProductList from './components/ProductList';
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.app}>
        <h1>Fake Store LLC</h1>
        <ProductList />
      </div>
    </>
  )
}

export default App;