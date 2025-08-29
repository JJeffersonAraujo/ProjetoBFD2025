const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pergunta(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (resposta) => resolve(resposta));
  });
}

async function notas() {
  let somaDasNotas = 0;
  const numNotas = 5;

  for (let i = 1; i <= numNotas; i++) {
    let nota;
    while (true) {
      const resposta = await pergunta(`Digite sua ${i}ª nota (entre 0 e 10): `);
      nota = Number(resposta);

      if (nota >= 0 && nota <= 10 && !isNaN(nota)) {
        console.log(`Nota válida: ${nota}`);
        somaDasNotas += nota;
        break; // Sai do loop 'while' quando a nota é válida
      } else {
        console.log("Nota inválida. Digite novamente.");
      }
    }
  }

  const media = somaDasNotas / numNotas;
  console.log(`\nMédia final: ${media.toFixed(2)}`);

  if (media >= 7) {
    console.log('Aprovado!');
  } else if (media >= 0) {
    console.log('Reprovado!');
  } else {
    console.log('Média inválida.');
  }
  
  rl.close(); // Fecha a interface de leitura
}

notas(); // Chamada da função para iniciar o programa