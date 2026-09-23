import './ListaHospitais.css';

const dadosHospitais = {
  Cobra: [
    { id: 1, nome: "Hospital de Doenças Tropicais (HDT)", endereco: "Av. Principal, 100 - Centro", tipoSoro: "Antibotrópico / Anticrotálico / Antielapídico" },
    { id: 2, nome: "Hospital Regional Norte", endereco: "Rua do Comércio, 550 - Zona Norte", tipoSoro: "Antibotrópico" }
  ],
  Escorpião: [
    { id: 3, nome: "Unidade de Pronto Atendimento (UPA) - Sul", endereco: "Av. Sul, 200", tipoSoro: "Antiescorpiônico" },
    { id: 4, nome: "Hospital Maternidade Infantil", endereco: "Rua das Flores, 10 - Centro", tipoSoro: "Antiescorpiônico" }
  ],
  Aranha: [
    { id: 5, nome: "Hospital Geral do Estado", endereco: "Praça da República, S/N", tipoSoro: "Antiaracnídico" },
    { id: 6, nome: "Centro Médico de Referência", endereco: "Av. Brasil, 900", tipoSoro: "Antiaracnídico" }
  ]
};

function ListaHospitais({ idAnimal }) {
  if (!idAnimal) {
    return null;
  }

  const hospitais = dadosHospitais[idAnimal];

  return (
    <div className="container-lista-hospitais">
      <h3>Hospitais de Referência para acidente com {idAnimal}</h3>

      <div className="grade-hospitais">
        {hospitais.map(hospital => (
          <div key={hospital.id} className="cartao-hospital">
            <div className="icone-hospital">🏥</div>
            <div className="info-hospital">
              <h4>{hospital.nome}</h4>
              <p className="endereco">📍 {hospital.endereco}</p>
              <p className="soro">💉 <strong>Soro Disponível:</strong> {hospital.tipoSoro}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaHospitais;
