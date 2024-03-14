/* eslint-disable no-console */

const analyzer =  {  
  getWordCount: (text) => {
    // TODO: esta función debe retornar el recuento de palabras que se encuentran Dividir el texto en palabras utilizando los espacios como separadores
    const palabras = text.split(" ");
    let count = 0;

    // for= crea un bucle (loop) para Iterar sobre cada palabra 
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] !=="") // "" <-- esto es una cadena de caracteres vacía (no hay nada)
      //esto también va dentro del bucle (for)
        count++;
    }
    return count;
        
  },
  getCharacterCount: (text) => {
    // TODO: Esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length; // propiedad para obtener longitud o número de elementos

  },
  
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;
    //los signos y el espacio se meten en un array.
    const signosDePuntuación = [' ', '.', ',', ';', ':', '!', '?', '"', "'", '-', '_', '/', '\\', '|', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}'];
    const espacio = [" "];
     
    for (let i = 0; i < text.length; i++) {
      // Verificar si el carácter no es un espacio ni un signo de puntuación
      if (text[i] !== espacio && !signosDePuntuación.includes(text[i])) {
            
        count++
      }
    }
    return count;

  },

  getAverageWordLength: (text) => {  
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
    if (!text.trim()) { 
      return 0; 
    }
    
    const wordCount = text.trim().split(" ").length 
    const words = text.trim().split(" ")
    console.log (wordCount,words)
    let totalLength = 0;  
    for (let i= 0; i<words.length; i++) {
      console.log (words[i].length) 
      totalLength = totalLength + words[i].length
    }
    //  longitud media de las palabras
    let promedioLength = totalLength / wordCount;
    promedioLength = parseFloat(promedioLength.toFixed (2))

    return promedioLength; 
    
  }, 
    
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  
    if (!text.trim()) {
      return 0;
    }
    if (text[text.length - 1] === ".") {
      text = text.substring(0, text.length - 1);
    }
    const palabras = text.split(" ");
    let count = 0;
    for (let i = 0; i < palabras.length; i++) {
      const numero = parseFloat(palabras[i]);
      while (palabras[i].endsWith("0")) {
        palabras[i] = palabras[i].substring(0, palabras[i].length - 1);
      }
      if (!isNaN(numero) && palabras[i] === numero.toString()) {
        count++;
      }
    }
    return count;
    
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    //
    if (!text.trim()) {
      return 0;
    }
    if (text[text.length - 1] === ".") {
      text = text.substring(0, text.length - 1);
    }
    const palabras = text.split(" ");
    let suma = 0
    for (let i = 0; i < palabras.length; i++) {
      const numero = parseFloat(palabras[i]);
      while (palabras[i].endsWith("0")) {
        palabras[i] = palabras[i].substring(0, palabras[i].length - 1);
      }
      if (!isNaN(numero) && palabras[i] === numero.toString()) {


        suma+=numero;
      }
    }
    return suma;
  }

}
export default analyzer;