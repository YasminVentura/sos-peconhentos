# SOS Peçonhentos

## 📌 Sobre o Projeto
Este projeto é um sistema web desenvolvido como atividade acadêmica para a disciplina de Programação Web I. O objetivo principal do site é facilitar a localização de hospitais e unidades de saúde próximos que sejam referência ou possuam soros antipeçonhentos, auxiliando no socorro rápido em casos de acidentes com animais peçonhentos (como cobras, escorpiões e aranhas).

> ⚠️ **Aviso Importante:** Como se trata de um projeto acadêmico (protótipo), **os hospitais e locais exibidos no sistema são meramente ilustrativos**. Não utilize os dados deste site em situações reais de emergência.

## 🎯 Problema e Impacto (Justificativa)
Acidentes com animais peçonhentos exigem atendimento médico e aplicação de soro específico no menor tempo possível. 
* **Consequências do problema:** A demora no socorro ou a ida a um hospital que não possui o soro adequado pode agravar drasticamente a situação, levando a sequelas graves ou sendo fatal.
* **A solução:** O sistema visa simplificar a busca por atendimento adequado, agilizando o tempo de socorro ao direcionar a vítima (ou o socorrista) diretamente para o local correto, ajudando a salvar vidas e minimizar os danos causados pelo acidente.

## 🛠️ Funcionalidades e Estrutura
O protótipo da solução foi pensado para situações de emergência, contendo informações claras e objetivas organizadas da seguinte forma:
- **Cabeçalho:** Header com o nome (logo) do site e um menu de navegação que guia o usuário pelas principais seções de forma rápida.
- **Números de Emergência:** Destaque para telefones importantes (como SAMU - 192 e Bombeiros - 193) para situações em que a vítima não consegue se deslocar por conta própria.
- **Primeiros Socorros:** Seção contendo dicas essenciais de cuidados imediatos após a picada e ações que devem ser evitadas.
- **Seletor de Animais:** Ícones representando os principais tipos de animais peçonhentos (cobras, aranhas e escorpiões). Ao clicar em um ícone, o sistema exibe os hospitais disponíveis para tratar aquele tipo de acidente.
- **Design:** Planejado utilizando a teoria das cores para refletir seriedade e alerta, conectando-se bem com a área da saúde e primeiros socorros.

## 🚀 Tecnologias Utilizadas
- **React** para a construção da interface de usuário e componentização.
- **HTML5 & CSS3** (com uso de Flexbox para o layout das caixas).
- **JavaScript**.

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

### Pré-requisitos
Você precisará ter o [Node.js](https://nodejs.org/) instalado. 

### Passos
1. Clone ou faça o download deste repositório para o seu computador.
2. Abra o terminal (ou prompt de comando) e navegue até a pasta raiz do projeto.
3. Instale as dependências do projeto executando o comando:
   ```bash
   npm install
   ```
4. Após o término da instalação, inicie a aplicação com o comando:
   ```bash
   npm start
   ```
5. O seu navegador padrão deverá abrir automaticamente em `http://localhost:3000` executando a aplicação. Caso não abra, basta acessar o link manualmente.
