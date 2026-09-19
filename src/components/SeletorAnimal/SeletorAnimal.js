import React from 'react';
import './SeletorAnimal.css';

const animais = [
  { id: 'cobra', nome: 'Cobra', emoji: '🐍' },
  { id: 'escorpiao', nome: 'Escorpião', emoji: '🦂' },
  { id: 'aranha', nome: 'Aranha', emoji: '🕷️' }
];

function SeletorAnimal({ aoSelecionarAnimal, animalSelecionado }) {
  return (
    <section id="hospitais" className="sessao-animal">
      <h2 className="titulo-sessao">Encontre um Hospital</h2>
      <p className="subtitulo-sessao">Selecione o animal causador do acidente para ver os hospitais com soro específico disponíveis.</p>
      
      <div className="container-animais">
        {animais.map((animal) => (
          <button 
            key={animal.id}
            className={`botao-animal ${animalSelecionado === animal.id ? 'selecionado' : ''}`}
            onClick={() => aoSelecionarAnimal(animal.id)}
          >
            <span className="emoji-animal">{animal.emoji}</span>
            <span className="nome-animal">{animal.nome}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default SeletorAnimal;
