import { useState } from 'react';
import './App.css';

import Cabecalho from './components/Cabecalho/Cabecalho';
import NumerosEmergencia from './components/NumerosEmergencia/NumerosEmergencia';
import PrimeirosSocorros from './components/PrimeirosSocorros/PrimeirosSocorros';
import SeletorAnimal from './components/SeletorAnimal/SeletorAnimal';
import ListaHospitais from './components/ListaHospitais/ListaHospitais';
import FAQ from './components/FAQ/FAQ';
import Rodape from './components/Rodape/Rodape';

function App() {
  const [animalSelecionado, setAnimalSelecionado] = useState(null);

  const lidarComSelecaoAnimal = (idAnimal) => {
    if (animalSelecionado === idAnimal) {
      setAnimalSelecionado(null);
    } else {
      setAnimalSelecionado(idAnimal);
    }
  };

  return (
    <div className="site">
      <Cabecalho />

      <main className="conteudo-principal">
        <NumerosEmergencia />
        <PrimeirosSocorros />
        <SeletorAnimal
          aoSelecionarAnimal={lidarComSelecaoAnimal}
          animalSelecionado={animalSelecionado}
        />
        <ListaHospitais idAnimal={animalSelecionado} />
        <FAQ />
      </main>

      <Rodape />
    </div>
  );
}

export default App;
