import React from 'react';
import './App.css';
import FormField from './components/FormField';
import Button from './components/Button';
import useForm from './hooks/useForm';

function App() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { valores, funcaoHandler } = useForm(valoresIniciais);

  return (
    <div className="App">
      <header className="App-header">
        <h1>99 bottles song</h1>  
      </header>

      <form>
        <FormField
          label="Número de garrafas"
          type="text"
          name="titulo"
          value={valores.titulo}
          onChange={funcaoHandler}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

    </div>
  );
}

export default App;
