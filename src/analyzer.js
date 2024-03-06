
const analyzer =  {  
  getWordCount: (text) => {
    // TODO: esta función debe retornar el recuento de palabras que se encuentran Dividir el texto en palabras utilizando los espacios como separadores
    let palabras = text.split(" ");
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
  
    let wordCount = 0; 
    let totalLength = 0;  
  
    let inicioPalabra = false; // Variable para controlar si se ha comenzado una palabra
  
    // Recorremos cada caracter del texto
    for (let i = 0; i < text.length; i++) {
        // Verificar si el carácter actual es una letra o un número???
        if ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z') || !isNaN(parseInt(text[i]))) {
            // Si es una letra o un dígito, indicamos que se ha comenzado una palabra
            inicioPalabra = true;
        } else {
            // Si no es una letra ni un dígito y ya se ha comenzado una palabra
            if (inicioPalabra) {
                // Incrementamos el contador de palabras
                wordCount++;
                // Se reinicia la variable que indica si se ha comenzado una palabra
                inicioPalabra = false;
            }
        }
  
        // 
        if (i < text.length - 1 && text[i] !== ' ') {
            // Incrementamos la longitud total de todas las palabras
            totalLength++;
        }
    }
  
    // Si se termina de recorrer el texto y ha comenzado una palabra, incrementamos el contador de palabras
    if (inicioPalabra) {
        wordCount++;
    }
  
    //  longitud media de las palabras
    const  promedioLength = totalLength / wordCount;
  
    return promedioLength; 
    
    }, 
    
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;
    
    for (let i = 0; i < text.length; i++) {
        //  El carácter actual es un número
        // Necesario usar isNaN para comprobar si es un número válido
        if (!isNaN(parseInt(text[i]))) {
            
            count++;
            
            // No se debe contar dígitos consecutivos como uno solo
            while (!isNaN(parseInt(text[i]))) {
                i++;
            }
        }
    }

    return count;   
        
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
      //
        let suma = 0;
    
        let numeroActual = ""; // este es un número temporal
    
        for (let i = 0; i < text.length; i++) {
            
            if (!isNaN(parseInt(text[i]))) {
                // Si es un número, se agrega al número actual
                numeroActual += text[i];
            } else {
                // Si no es un número, se verifica si hay un número acumulado
                if (numeroActual !== "") {
                    // el número acumulado o suma se convierte a entero y se suma al total
                    suma += parseInt(numeroActual);
                    // Esto reiniia el número actual para usarlo con el siguiente número 
                    numeroActual = "";
                }
            }
        }
    
        if (numeroActual !== "") {
            suma += parseInt(numeroActual);
        }
    
        return suma;
  
}
}
export default analyzer;
