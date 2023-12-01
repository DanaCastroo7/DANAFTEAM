/*
Primero declare el siguiente objeto, el cual contiene informacion acerca de algunos albums musicales, cada uno identificado con un id unico de 4 digitos. 

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


Su trabajo es programar la función "updateRecords" la cual recibe 4 argumentos(records, id, prop, value).

El comportamineto de la función debe ser el siguiente:
1. La función siempre debe regresar el objeto completo "records".
2. Si "value" es una cadena vacia, borrar la propiedad "prop" del  album cuyo id es "id".
3. Si "prop" no es "tracks" y "value" no es una cadena vacia, asignar "value" a la propiedad "prop" del album cuyo id es "id".
4. Si "prop" es "tracks", y "value" no es una cadena vacia, se debe actualizar el arreglo "tracks" del album.
  4.1. En caso de que el album no tenga la propiedad "tracks", esta se debe asignar a un arreglo vacio y después se debe añadir "value" al final del arreglo

Nota: No debes modificar el objeto "recordCollection".
*/

function updateRecords(records, id, prop, value) {
    if (value === "") {
      delete records[id][prop];
    } else if (prop !== "tracks") {
      records[id][prop] = value;
    } else {
      if (!records[id].hasOwnProperty("tracks")) {
        records[id].tracks = [];
      }
      records[id].tracks.push(value);
    }
    
    return records;
  }

  const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  }
//   console.log(updateRecords);
  console.log(updateRecords(recordCollection, 2548, "artist", "Bon Jovi Updated")); // Actualiza el artista del álbum con id 2548
  console.log(updateRecords(recordCollection, 5439, "tracks", "Dancing Queen")); // Añade una pista al álbum con id 5439
  console.log(updateRecords(recordCollection, 1245, "artist", "")); // Borra la propiedad "artist" del álbum con id 1245