import React from 'react';
import { Prefecture, Population } from './entites';
import { ResasApiService } from './ResasApiService';
import { ResasApiError } from './ResasApiError';

const resasApiService = new ResasApiService("25BO76EGI4g8ugQJGIAqzWk93rVrWVxZuxW02TJp");

export default () => {
  const [prefectures, setPrefectures] = React.useState<Prefecture[]>([]);
  const [checkedPrefs, setCheckedPrefs] = React.useState<{ prefecture: Prefecture, checked: boolean }[]>([]);
  const [populations, setPopulations] = React.useState<{ prefecture: Prefecture, population: Population }[]>([]);
  const [apiError, setApiError] = React.useState<ResasApiError>();

  React.useEffect(() => {
    resasApiService.prefectures()
      .then(prefs => setPrefectures(prefs))
      .catch(error => {
        if (error instanceof ResasApiError) {
          setApiError(error);
        } else {
          console.error(error);
        }
      });
  }, []);

  React.useEffect(() => {
    setCheckedPrefs(prefectures.map(pref => ({ prefecture: pref, checked: false })));
  }, [prefectures]);

  React.useEffect(() => {
    const promisePopulations = checkedPrefs
      .filter(state => state.checked)
      .map(async state => {
        const population = await resasApiService
          .populationCompositionPerYear(state.prefecture.prefCode);
        return {
          prefecture: state.prefecture,
          population: population,
        }
      }
      );

    Promise.all(promisePopulations)
      .then(populations => setPopulations(populations))
      .catch(error => {
        if (error instanceof ResasApiError) {
          setApiError(error);
        } else {
          console.error(error);
        }
      });
  }, [checkedPrefs]);

  const checkboxClickHandler = (prefCode: number) => () => {
    setCheckedPrefs(prev => prev.map(state => {
      if (state.prefecture.prefCode === prefCode) {
        return {
          prefecture: state.prefecture,
          checked: !state.checked,
        };
      } else {
        return state;
      }
    }))
  }

  return {
    checkedPrefs,
    apiError,
    populations,
    checkboxClickHandler,
  }
}