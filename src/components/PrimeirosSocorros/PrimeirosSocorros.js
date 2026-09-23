import './PrimeirosSocorros.css';

const fazer = [
  "Lavar o local da picada apenas com água e sabão.",
  "Manter o paciente em repouso e com o membro elevado.",
  "Procurar atendimento médico imediatamente.",
  "Se possível e seguro, tirar uma foto do animal para identificação médica."
];

const naoFazer = [
  "NÃO amarrar ou fazer torniquete no membro acometido.",
  "NÃO cortar ou perfurar o local da picada.",
  "NÃO chupar o veneno ou colocar folhas, pó de café ou terra.",
  "NÃO dar bebidas alcoólicas à vítima."
];

function CaixaSocorro({ icone, titulo, itens, classePersonalizada }) {
  return (
    <div className={`caixa-socorros ${classePersonalizada}`}>
      <div className="cabecalho-caixa">
        <span className="icone">{icone}</span>
        <h3>{titulo}</h3>
      </div>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function PrimeirosSocorros() {
  return (
    <section id="primeiros-socorros" className="sessao-primeiros-socorros">
      <h2 className="titulo-sessao">Primeiros Socorros</h2>

      <div className="conteudo-socorros">
        <CaixaSocorro
          icone="✅"
          titulo="O que FAZER"
          itens={fazer}
          classePersonalizada="fazer"
        />
        <CaixaSocorro
          icone="❌"
          titulo="O que NÃO FAZER"
          itens={naoFazer}
          classePersonalizada="nao-fazer"
        />
      </div>
    </section>
  );
}

export default PrimeirosSocorros;
