import React from 'react';
import './App.css';
import { PrefCheckBox } from './components/PrefCheckBox';
import useAppState from "./AppState";
import { PopulationChart } from './PopulationChart';

const App: React.FC = () => {
  const { checkedPrefs, checkboxClickHandler, populations, apiError } = useAppState();

  return (
    <div className="App">
      <div className="AppContainer">
        <header>
          <h1>Population Chart</h1>
        </header>
        <div className="PrefCheckBoxContainer">
          {checkedPrefs.map(checkedPref => (
            <PrefCheckBox
              key={checkedPref.prefecture.prefCode}
              checked={checkedPref.checked}
              prefName={checkedPref.prefecture.prefName}
              onClick={checkboxClickHandler(checkedPref.prefecture.prefCode)}
            />
          ))}
        </div>
        <div>
          {populations.map(population => (
            <React.Fragment key={population.prefecture.prefCode}>
              <p>{`${population.prefecture.prefCode}: ${population.prefecture.prefName}`}</p>
              <p>{JSON.stringify(population.population.data[0].data[0])}</p>
            </React.Fragment>
          ))}
        </div>
        {apiError && <p className="ErrorMessage">{apiError.message}</p>}
        <PopulationChart />
      </div>
    </div>
  );
}

export default App;
