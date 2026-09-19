import React from 'react';
import './NumerosEmergencia.css';

const contatos = [
  {
    id: 'samu',
    icone: '🚑',
    titulo: 'SAMU',
    numero: '192',
    descricao: 'Ligue imediatamente em caso de picadas graves ou se a vítima apresentar falta de ar e desmaios.',
    classePersonalizada: 'samu'
  },
  {
    id: 'bombeiros',
    icone: '🚒',
    titulo: 'Bombeiros',
    numero: '193',
    descricao: 'Para resgate ou se o animal ainda estiver no local e representar risco a outras pessoas.',
    classePersonalizada: 'bombeiros'
  }
];

function CartaoEmergencia({ icone, titulo, numero, descricao, classePersonalizada }) {
  return (
    <div className={`cartao-emergencia ${classePersonalizada}`}>
      <div className="icone-emoji">{icone}</div>
      <h3>{titulo}</h3>
      <p className="numero-telefone">{numero}</p>
      <p className="descricao">{descricao}</p>
    </div>
  );
}

function NumerosEmergencia() {
  return (
    <section id="emergencia" className="sessao-emergencia">
      <h2 className="titulo-sessao">Contatos de Emergência</h2>
      <div className="container-cartoes">
        {contatos.map(contato => (
          <CartaoEmergencia
            key={contato.id}
            icone={contato.icone}
            titulo={contato.titulo}
            numero={contato.numero}
            descricao={contato.descricao}
            classePersonalizada={contato.classePersonalizada}
          />
        ))}
      </div>
    </section>
  );
}

export default NumerosEmergencia;
