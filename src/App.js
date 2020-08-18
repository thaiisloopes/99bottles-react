import React from 'react';
import './App.css';
import FormField from './components/FormField';
import useForm from './hooks/useForm';
import getVersesFrom from './service/lyrics.js';

function App() {
  const valoresIniciais = {
    garrafas: ''
  };

  const { valores, funcaoHandler } = useForm(valoresIniciais);
  const temGarrafas = Boolean(valores.garrafas);
  const maisQueZeroGarrafas = Boolean(valores.garrafas > 0);
  const menosQue100Garrafas = Boolean(valores.garrafas < 100);

  return (
    <div className="Container">
      <div className="App">
        <header className="App-header">
          <h1>99 bottles song</h1>  
          <h3>99 bottles of beer</h3>
        </header>

        <form>
          <FormField
            label="Número de garrafas"
            type="number"
            name="garrafas"
            value={valores.garrafas}
            onChange={funcaoHandler}
          />
        </form>
      </div>

      {
        temGarrafas && maisQueZeroGarrafas && menosQue100Garrafas && (
          <div className="Response">
            {getVersesFrom(valores.garrafas)}
          </div>
        )
      }
    </div>
  );
}

export default App;
