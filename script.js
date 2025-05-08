const textoOriginal = 
`Um transtorno de aprendizagem não é um reflexo de inteligência ou potencial. É apenas uma diferença na forma como o cérebro processa informações. E essa diferença não diminui o valor, a criatividade ou a capacidade de realização de ninguém.

Pessoas com dislexia, discalculia, disortografia ou outros transtornos de aprendizagem muitas vezes 
desenvolvem habilidades incríveis em áreas como pensamento criativo, resolução de problemas, 
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
  return texto.split(/\b/).map(token => {
    return /\w+/.test(token) ? embaralharPalavra(token) : token;
  }).join('');
}

function atualizarTexto() {
  const texto = simularDislexia(textoOriginal);
  document.getElementById('textoSimulado').innerText = texto;
}

setInterval(atualizarTexto, 1000);
