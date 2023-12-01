console.log("Ejercicio 2");

function promedioStudent(M, califArray) {
  let suma = 0;
  for(var i = 0; i < califArray.length; i++){
    suma += califArray[i];    
  }
  p = suma/6;
  
  return M.toString() + " " + p.toFixed(2).toString();
}