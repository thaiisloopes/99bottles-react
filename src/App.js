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
            type="text"
            name="garrafas"
            value={valores.garrafas}
            onChange={funcaoHandler}
          />
        </form>
      </div>

      <div className="Response">
        {getVersesFrom(valores.garrafas)}
      </div>
    </div>
  );
}

export default App;
