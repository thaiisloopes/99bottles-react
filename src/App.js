import React from 'react';
import './App.css';
import FormField from './components/FormField';
import useForm from './hooks/useForm';
import getVersesFrom from './service/lyrics.js';

function App() {
  const initialValues = {
    bottles: ''
  };

  const { values, handlerFunction } = useForm(initialValues);
  const hasBottles = Boolean(values.bottles);
  const moreThan0Bottles = Boolean(values.bottles > 0);
  const lessThan100Bottles = Boolean(values.bottles < 100);

  return (
    <div className="Container">
      <div className="App">
        <header className="App-header">
          <h1>99 bottles song</h1>  
          <h3>99 bottles of beer</h3>
          <h6>Number of bottles must be between 1 and 99 </h6>
        </header>

        <form>
          <FormField
            label="Number of bottles"
            type="number"
            name="bottles"
            value={values.bottles}
            onChange={handlerFunction}
          />
        </form>
      </div>

      {
        hasBottles && moreThan0Bottles && lessThan100Bottles && (
          <div className="Response">
            {getVersesFrom(values.bottles)}
          </div>
        )
      }
    </div>
  );
}

export default App;
