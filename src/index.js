import analyzer from './analyzer.js';

const inputText = document.querySelector('textarea[name="user-input"]');
inputText.addEventListener('input', function() {
    // Aquí se obtiene el texto ingresado por la usuaria
    const texto = inputText.value;
// Seleccionar todos los elementos <li> dentro de un <ul>
  const elementosLi = document.querySelectorAll("ul > li");

// Función 1 
    const primerElementoLi = elementosLi[0]; 
   
    const wordcount = analyzer.getWordCount(texto);

    primerElementoLi.textContent = "Palabras: " + wordcount;

// Función 2 
   const segundoElementoLi = elementosLi[1];

   const charactercount = analyzer.getCharacterCount(texto);

   segundoElementoLi.textContent = "Caracteres: " + charactercount;
    
//  Función 3
    const tercerElementoLi = elementosLi[2];

    const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(texto);
  
    tercerElementoLi.textContent = "Caracteres sin espacios y signos de puntuación: " + characterCountExcludingSpaces;

 // Función 4

    const cuartoElementoLi = elementosLi[3];

    const numbercount = analyzer.getNumberCount (texto);

    cuartoElementoLi.textContent = "Números: " + numbercount;

// función 5 

    const quintoElementoLi = elementosLi[4]
    const numbersum = analyzer.getNumberSum(texto);
    quintoElementoLi.textContent = "Suma de Números: " + numbersum;

    // Función 6

    const sextoElementoLi = elementosLi [5]
    const datatestid = analyzer.getAverageWordLength(texto);
    // Aquí despues de Plabras: "<--- hay un espacio, eso se ve reflejado en el analizador de textos"
    sextoElementoLi.textContent = "Promedio Longitud Palabras: " + datatestid ;

    // Botón Limpiar

    function setupResetButton() {
        // hay que llamar al textarea usando querySelector por su atributo name
        const textarea = document.querySelector('textarea[name="user-input"]');
        const LimpiarMetricas = document.getElementById('reset-button');
    
        LimpiarMetricas.addEventListener('click', function() {
            textarea.value = '';
        });
    }
    // Hay que  Llamar a la función para que se ejecute o se configure el event listener
    setupResetButton();
    
    

});  