console.log("Ejercicio 5 test");
const cambioData = [
    [150, 250, 50],
    [500,400,155],
    [110, 840, 280],
    [149.5, 325, 100.4],
];

cambioData.forEach(element => {
// console.log(element[0]);
// console.log(element[1]);
// console.log(element[2]);

const rTest=cambio(element[0], element[1]);

console.log( rTest=== element[2] ? "🟢" : "❌", 
         rTest, " | ",
         element[2]             
          );
})