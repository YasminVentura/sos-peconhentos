import React from 'react';
import './Cabecalho.css';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-marca">
        <span className="cabecalho-icone">🏥</span>
        <h1 className="cabecalho-titulo">S.O.S Peçonhentos</h1>
      </div>
      <nav className="cabecalho-nav">
        <ul>
          <li><a href="#emergencia">Emergência</a></li>
          <li><a href="#primeiros-socorros">Primeiros Socorros</a></li>
          <li><a href="#hospitais">Hospitais</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;
