/** 
 * Esta funcion se encarga de obtener un elemento aleatorio de una lista 
 * 
 * !! Si no encuentra ningun elemento entonces revolvera un null
 */
function getRandomItem(lista) {
    if (lista.length === 0) return null;

    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
  }