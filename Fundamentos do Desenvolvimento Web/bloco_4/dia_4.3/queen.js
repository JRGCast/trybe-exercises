// posição rainha
let queenPosCol = 5; let queenPosLine = 6;

// posição peça
let pecaPosCol = 6; let pecaPosLine = 6;

// condição ataque
let ataqueSucesso = false;

// movimentação vertical e horizontal
if(queenPosCol === pecaPosCol || queenPosLine === pecaPosLine) {
    ataqueSucesso = true
}

// console.log(ataqueSucesso) funciona!

// movimentação diagonal
for(let diagonalSuperior = 1; diagonalSuperior > 8; diagonalSuperior+= 1) {
    let lineQueen = queenPosLine + diagonalSuperior;
    let colQueen = queenPosCol + diagonalSuperior;

if (queenPosLine > 8 || queenPosCol > 8) {
    ataqueSucesso = false;
    break;
  }
}
console.log(ataqueSucesso)