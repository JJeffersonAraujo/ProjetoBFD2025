const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pergunta(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (resposta) => resolve(Number(resposta)));
  });
}

async function notas() {
  let notas = [];

  for (let i = 1; i <= 5; i++) {
    let nota = await pergunta(`Digite a ${i}ª nota: `);

    while (nota < 0 || nota > 10 || isNaN(nota)) {
      console.log("Nota inválida. Digite novamente.");
      nota = await pergunta(`Digite a ${i}ª nota: `);
    }

    notas.push(nota);
    console.log("Nota válida:", nota);
  }

  let media = notas.reduce((acc, n) => acc + n, 0) / notas.length;

  console.log("Média final:", media.toFixed(2));

  if (media >= 7) {
    console.log("Aprovado!");
  } else {
    console.log("Reprovado!");
  }

  rl.close();
  
}

notas();
