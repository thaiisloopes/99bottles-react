import React from 'react';
import './App.css';
import FormField from './components/FormField';
import Button from './components/Button';
import useForm from './hooks/useForm';
import getVersesFrom from './service/lyrics.js';

function App() {
  const valoresIniciais = {
    garrafas: ''
  };

  const { valores, funcaoHandler } = useForm(valoresIniciais);

  return (
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

        <Button>
          Cadastrar
        </Button>
      </form>

      {valores.length === 0 && (
      <div>
        {/* Cargando ... */ }
        Loading...
      </div>
      )}

      <div>
        <p>
          {getVersesFrom(valores.garrafas)}
        </p>
      </div>

    </div>
  );
}

export default App;
