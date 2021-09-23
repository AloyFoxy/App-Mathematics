

function getValue(){
    selectElement = document.querySelector('#operation');
    value = selectElement.value;
}
getValue()


function operation(){
    if(value == 'suma'){
        console.log("Es una suma");
        var numero1 = document.getElementById('a').value;
        var numero2 = document.getElementById('b').value;
        var resultado = parseInt(numero1) + parseInt(numero2);
        //Mostrar en consola el resultado
        console.log('El resultado es: ' + resultado);
        //Mostrar en el HTML el resultado
        var showResult = document.querySelector('#show_result');
        showResult.classList.add('show_result');
        showResult.textContent = ('El resultado es: ' + resultado)
    }
    else if(value == 'resta'){
        console.log('Es una resta');
        var numero1 = document.getElementById('a').value;
        var numero2 = document.getElementById('b').value;
        var resultado = parseInt(numero1) - parseInt(numero2);
        //Mostrar en consola el resultado
        console.log('El resultado es: ' + resultado);
        //Mostrar en el HTML el resultado
        var showResult = document.querySelector('#show_result');
        showResult.textContent = ('El resultado es: ' + resultado)
    }
    else if(value == 'multiplicacion'){
        console.log('Es una multiplicacion');
        var numero1 = document.getElementById('a').value;
        var numero2 = document.getElementById('b').value;
        var resultado = parseInt(numero1) * parseInt(numero2);
        //Mostrar en consola el resultado
        console.log('El resultado es: ' + resultado);
        //Mostrar en el HTML el resultado
        var showResult = document.querySelector('#show_result');
        showResult.textContent = ('El resultado es: ' + resultado)
    }
    else if(value == 'division'){
        console.log('Es una division');
        var numero1 = document.getElementById('a').value;
        var numero2 = document.getElementById('b').value;
        var resultado = parseInt(numero1) / parseInt(numero2);
        //Mostrar en consola el resultado
        console.log('El resultado es: ' + resultado);
        //Mostrar en el HTML el resultado
        var showResult = document.querySelector('#show_result');
        showResult.textContent = ('El resultado es: ' + resultado)
    }
    else{
        console.log('Esto no funciona');
        var showResult = document.querySelector('#show_result');
        showResult.classList.add('error_results');
        showResult.textContent = ('Ha habido un error de calculo... revise el codigo');
    }
}

// if(value == 'suma'){
//     var numero1 = document.getElementById('a').value;
//     var numero2 = document.getElementById('b').value;
//     var sum = parseInt(numero1) + parseInt(numero2);
//     console.log('El resultado es: ' + sum);

// }else if(value == 'resta'){
//     var numero1 = document.getElementById('a').value;
//     var numero2 = document.getElementById('b').value;
//     var sum = parseInt(numero1) - parseInt(numero2);
//     console.log('El resultado es: ' + sum);
// }







/*
//creamos function llamada suma
function operation(){
    //creamos variable y asignamos el VALOR del ELEMENTO con el ID A
    var numero1 = document.getElementById('a').value;
    var numero2 = document.getElementById('b').value;
    //creamos variable sum y asignamos el resultado de numero1 sumado a numero2. parseint analiza y devuelve un numero entero
    var sum = parseInt(numero1) + parseInt(numero2);
    //aqui escribimos(write) en el documento lo que esta dentro de los parentesis. escribimos: El resultado es: y concatenamos/unimos la variable "sum" la cual lleva dentro el resultado del numero 1 y numero 2
    document.write('El resultado es: ' + sum);
}
*/