import './NumerosEmergencia.css';

const contatos = [
  {
    id: 'SAMU',
    icone: '🚑',
    numero: '192',
    descricao: 'Ligue imediatamentae em caso de picadas graves ou se a vítima apresentar falta de ar e desmaios.'
  },
  {
    id: 'Bombeiros',
    icone: '🚒',
    numero: '193',
    descricao: 'Para resgate ou se o animal ainda estiver no local e representar risco a outras pessoas.'
  }
];

function CartaoEmergencia({ id, icone, numero, descricao }) {
  return (
    <div className={`cartao-emergencia ${id}`}>
      <div className="icone-emoji">{icone}</div>
      <h3>{id}</h3>
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
            id={contato.id}
            icone={contato.icone}
            titulo={contato.id}
            numero={contato.numero}
            descricao={contato.descricao}
          />
        ))}
      </div>
    </section>
  );
}

export default NumerosEmergencia;
