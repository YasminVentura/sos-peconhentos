import { useState } from 'react';
import './FAQ.css';

const perguntas = [
  {
    pergunta: "E se eu não souber qual foi o animal?",
    resposta: "Lave o local com água e sabão e procure a emergência imediatamente. Se possível, tente lembrar as características do animal (cor, tamanho), mas não perca tempo procurando por ele."
  },
  {
    pergunta: "A pessoa está com muita sede, posso dar água?",
    resposta: "Sim, a hidratação com água é recomendada, mas em pequenos goles. NÃO dê bebidas alcoólicas, café ou outras misturas."
  },
  {
    pergunta: "Devo tentar capturar o animal?",
    resposta: "Somente se for seguro (por exemplo, tirar uma foto de longe ou cobrir com um balde). Nunca coloque-se em risco para capturar o animal, pois uma nova picada agravará a situação."
  }
];

function FAQ() {
  const [perguntaAtiva, setPerguntaAtiva] = useState(null);

  const alternarPergunta = (index) => {
    if (perguntaAtiva === index) {
      setPerguntaAtiva(null);
    } else {
      setPerguntaAtiva(index);
    }
  };

  return (
    <section className="sessao-faq">
      <h2 className="titulo-sessao">Perguntas Frequentes (FAQ)</h2>
      <div className="lista-faq">
        {perguntas.map((item, index) => (
          <div key={index} className={`item-faq ${perguntaAtiva === index ? 'ativo' : ''}`}>
            <button className="pergunta-faq" onClick={() => alternarPergunta(index)}>
              {item.pergunta}
              <div className="icone-seta">{perguntaAtiva === index ? '▲' : '▼'}</div>
            </button>
            <div className="resposta-faq">
              <p>{item.resposta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
