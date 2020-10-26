let nomePeca = undefined;
let pecaMov = nomePeca.toLowerCase();

switch(pecaMov){
    case "pawn":
        console.log("The Pawn only moves fowardly | and can only kills in foward diagonally \ /");
        break;

    case "bishop":
        console.log("The Bishop moves and kills only in diagonally \ /");
         break;

    case "horse":
        console.log("The Horse moves and kills only in L shapes, but in any direction, also, it's the only unit that can jump other units");
    break;

    case "queen":
        console.log("The Queen can move and kill horizontally --, vertically | and diagonally /");
        break;

    case "king":
    console.log("The King moves and kills in all directions, but only one space per turn");
    break;

    case "tower":
        console.log("The Tower moves and kills horizontally -- and vertically");
        break;

    default:
        console.log("Error: input a valid chess piece.")
}