const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,   // corrigido "imput" -> "input"
  output: process.stdout
});

// Função auxiliar que transforma rl.question em Promise
function pergunta(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (resposta) => resolve(resposta));
  });
}

async function notas() {
  let nota1 = Number.toFixed(2)(await pergunta("Digite sua primeira nota: "));
  while (nota1 < 0 || nota1 > 10 || isNaN(nota1)) {
    console.log("Nota inválida. Digite novamente: ");
    nota1 = Number.toFixed(2)(await pergunta("Digite sua primeira nota: "));
  }
  console.log("Nota válida:", nota1);

  let nota2 = Number.toFixed(2)(await pergunta("Digite sua segunda nota: "));
  while (nota2 < 0 || nota2 > 10 || isNaN(nota2)) {
    console.log("Nota inválida. Digite novamente: ");
    nota2 = Number.toFixed(2)(await pergunta("Digite sua segunda nota: "));
  }
  console.log("Nota válida:", nota2);

  let nota3 = Number.toFixed(2)(await pergunta("Digite sua terceira nota: "));
  while (nota3 < 0 || nota3 > 10 || isNaN(nota3)) {
    console.log("Nota inválida. Digite novamente: ");
    nota3 = Number.toFixed(2)(await pergunta("Digite sua terceira nota: "));
  }
  console.log("Nota válida:", nota3);

  let nota4 = Number.toFixed(2)(await pergunta("Digite sua quarta nota: "));
  while (nota4 < 0 || nota4 > 10 || isNaN(nota4)) {
    console.log("Nota inválida. Digite novamente: ");
    nota4 = Number.toFixed(2)(await pergunta("Digite sua quarta nota: "));
  }
  console.log("Nota válida:", nota4);

  let nota5 = Number.toFixed(2)(await pergunta("Digite sua quinta nota: "));
  while (nota5 < 0 || nota5 > 10 || isNaN(nota5)) {
    console.log("Nota inválida. Digite novamente: ");
    nota5 = Number.toFixed(2)(await pergunta("Digite sua quinta nota: "));
  }
  console.log("Nota válida:", nota5);

   let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

  console.log("\n📊 Média final:", media.toFixed(2));

  if (media >= 7 && media <= 10) {
    console.log("✅ Aprovado!");
  } else if (media >= 0) {
    console.log("❌ Reprovado!");
  } else {
    console.log("⚠️ Média inválida.");
  }

  rl.close();
}

notas();
