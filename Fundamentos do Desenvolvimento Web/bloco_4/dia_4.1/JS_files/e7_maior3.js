let x = 10;
let y = 15;
let z = 20;

if((x > y) && (x > z)){
    console.log("Imprimi " + x + " Porque é maior que " + y + " e " + z)

} else if ((y > x) && (y > z)){
    console.log("Imprimi " + x + " Porque é maior que " + y + " e " + z)

} else {
    console.log("Imprimi " + z + " Porque é maior que " + y + " e " + x)
}