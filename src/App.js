import { useState } from 'react';
import styles from './App.css';
import RateInfo from './components/Data/RateInfo'
import Rates from './components/Rates';

function App() {

  const [selectId, setSelect] = useState(null);

  const makeSelected = (id) => {
    setSelect(id);
  }

  return (
    <div className={styles.App}>
      {RateInfo.map((tarif) => <Rates
        key={tarif.id}
        id={tarif.id}
        title={tarif.title}
        price={tarif.price}
        speed={tarif.speed}
        title_bg={tarif.title_bg}
        price_bg={tarif.price_bg}
        makeSelected={makeSelected}
        setSelect={setSelect}
        selectId={selectId}
      />)}

    </div>
  );
}

export default App;
