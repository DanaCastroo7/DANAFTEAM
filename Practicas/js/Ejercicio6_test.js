console.log("Ejercicio 6 test");

const trianguloData = [
    [4, 8, 4],
    [4, 6, 6],
    [2, 4, 4],
    [8, 4, 25],
];

trianguloData.forEach(element => {
// console.log(element[0]);
// console.log(element[1]);
// console.log(element[2]);

const rTest=triangulo(element[0], element[1]);

console.log( rTest=== element[2] ? "🟢" : "❌", 
         rTest, " | ",
         element[2]             
          );
});