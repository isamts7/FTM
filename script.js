const textoOriginal = 

`Um transtorno de aprendizagem não é um reflexo de inteligência ou potencial. É apenas uma diferença na forma como o cérebro processa informações. 
E essa diferença não diminui o valor, a criatividade ou a capacidade de realização de ninguém.

Pessoas com dislexia, discalculia, disortografia ou outros transtornos de aprendizagem muitas vezes desenvolvem habilidades incríveis em áreas como pensamento criativo, resolução de problemas, 
comunicação verbal, inteligência emocional e perseverança. Elas aprendem a enfrentar desafios desde cedo, o que as torna resilientes, empáticas e determinadas.`;

function embaralharPalavra(palavra) {
  if (palavra.length <= 3) return palavra;
  const letras = palavra.slice(1, -1).split('');
  for (let i = letras.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letras[i], letras[j]] = [letras[j], letras[i]];
  }
  return palavra[0] + letras.join('') + palavra[palavra.length - 1];
}

function simularDislexia(texto) {
  return texto.split(' ').map(palavra => embaralharPalavra(palavra)).join(' ');
}

function atualizarTexto() {
  document.getElementById('textoSimulado').innerText = simularDislexia(textoOriginal);
}

setInterval(atualizarTexto, 1200); 

// Perguntas para o desafio
const perguntas = [
  {
    texto: "O que é dislexia?",
    resposta: "Um transtorno de aprendizagem que afeta a leitura e escrita."
  },
  {
    texto: "Pessoas com dislexia são menos inteligentes?",
    resposta: "Não, dislexia não está relacionada à inteligência."
  },
  {
    texto: "Quais habilidades pessoas com dislexia podem desenvolver?",
    resposta: "Criatividade, inteligência emocional, resolução de problemas, etc."
  }
];

let perguntaAtual;

function sortearPergunta() {
  const indice = Math.floor(Math.random() * perguntas.length);
  perguntaAtual = perguntas[indice];
  document.getElementById('pergunta').innerText = perguntaAtual.texto;

  // Exibe apenas no console para o apresentador
  console.log("RESPOSTA:", perguntaAtual.resposta);
}

sortearPergunta();
