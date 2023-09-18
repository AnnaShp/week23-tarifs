import styles from './App.css';
import RateInfo from './components/Data/RateInfo'
import Rates from './components/Rates';

function App() {
  return (
    <div className={styles.App}>
      {RateInfo.map((tarif) => <Rates
        title={tarif.title}
        price={tarif.price}
        speed={tarif.speed}
        title_bg={tarif.title_bg}
        price_bg={tarif.price_bg}
        selected={tarif.selected}
      />)}

    </div>
  );
}

export default App;
