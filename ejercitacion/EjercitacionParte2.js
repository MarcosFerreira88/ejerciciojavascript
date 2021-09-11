//Completa las funciones que se encuentran a continuacion, para pasar los Test propuestos.

//La funcion retornarArgumento, debe retornar el argumento que recibe
function retornarArgumento(arg){
return arg
}

//La funcion operacionesAritmetaicas, recibe el tipo de 'operacion' como string ("suma", "resta", "multiplicacion", "division", "modulo"). Dependiendo de la operacion que reciba, debe retornar el resultado apropiado para los argumentos A y B.
function operacionesAritmetaicas(operacion, A, B){

    if(operacion=="suma"){
        resultado=A+B;
         return resultado
    }
    if(operacion=="resta"){
       return A-B
    }
    if(operacion=="multiplicacion"){
        return resultado=A*B
    }
    if(operacion==="division"){
        return resultado=A/B
    }
    if(operacion==='modulo'){
        return A%B;
    }
   
  
      
       
}

//la funcion esParOImpar recibe como argumento un numero (en caso tal de recibir otro tipo de dato debe retornar un mensaje de error "solo se permiten numeros") y retorna si "es par" o "es impar"
function esParOImpar(arg){
    if (Number.isInteger(arg)) {
        if(arg%2==0){
            return 'es par'
         }else{
             
             return 'es impar'
            
         }
    }else{
        return 'solo se permiten numeros'
    }
        
            
    
        
}

//la funcion completarSaludo recibe 3 tipos de saludos diferentes, si recibes el tipo de saludoA, debes retornar el saludo sumando tu nombre despues de este "saludoA Camilo", si no recibes el saludoA sino, el saludoB, desbes retonar el saludo sumando tu nombre despues de este "saludoB Camilo", asi mismo para el saludoC.
function completarSaludo(saludoA, saludoB, saludoC){
    if(arguments[0]){
        return saludoA +" marcos";
    }else if(arguments[1]){
        return saludoB + " marcos";

    }else if(arguments[2]){
        return saludoC+ " marcos"
    }
}

//La función juegoDeLogica recibe tres números distintos: 
//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
function juegoDeLogica(num1, num2, num3){

    if(num1<0 || num2<0 ||num3<0){
        return "Hay negativos"
    }else  if(num1===0 || num2===0 ||num3===0){
        return "Error"
    }else  if(num1>num2 && num1>num3 && num1>0){
          return 'Número 1 es mayor y positivo'     
        
    } else if(num3>num1 && num3>num2){
        return num3+1;
    }else{return false}
        
        
        

        

}

//La funcion cuatosDigitosTiene recibe un numero entero y determina cuantos digitos tiene este, retornar la cantidad de digitos que tiene.
function cuatosDigitosTiene(numero){
return numero.toString().length;
}

//La funcion arraysDice:
//1. recibe un array y un "mandato" o "frase" sobre lo que se desea hacer 
//2. debe cumplir con el "mandato" o "frase" y retornar el valor esperado.
//3. no puedes utilizar metodos de arrays (map, forEach, reduce) 
//4. puedes utilizar los metodos de arrays (push, pop, shift, unshift)
function arraysDice(array, frase){
    if (frase==="0 debe ir al inicio del arreglo") {
        array.unshift(0)
        return array
    }
    if (frase==="el valor de la ultima posicion debe ir tambien en la posicion 0") {
        ultimo=array[array.length-1]
        array[0]=ultimo
        return array
    }
    if (frase==="0 debe ir al final del arreglo") {
        array.push(0);
        return array;
        
    }
    if (frase==="quiero saber el valor de la posicion 2") {
        return array[2]
    }
    if (frase==="debe aumentar en 2 el valor de cada posicion") {
        
        for (let index = 0; index < array.length; index++) {
           array[index]=array[index]+2;
          
            
        }
        return array
    }
    if (frase==="debe multiplicar por 5 el valor de cada posicion") {
        for (let index = 0; index < array.length; index++) {
            array[index]=array[index]*5;
           
             
         }
         return array
    }
    if (frase==="debe convertirse en 1 sola frase") {
       return array.join(" ")
        
    }
    if (frase==="quiero saber el valor mas grande") {
        let maximo=0;
        for (let index = 0; index < array.length; index++) {
            if (array[index]>maximo) {maximo=array[index]
                
            }
            
        }
        return parseInt(maximo)
        
    }
    if (frase==="quiero saber si el 'prof Bryan' esta") {
        let esta=false;
        for (let index = 0; index < array.length; index++) {
            if (array[index]==="prof Bryan") {
                esta=true
                
            }
            
        }
        return esta
    }
    if (frase==="quiero saber cuantos valores son mayores a 20") {
        let contador=0;
        for (let index = 0; index < array.length; index++) {
           if (array[index]>20) {contador+=1
               
           }
            
        }
        return contador
        
    }

}

// La funcion crearObjeto debe crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre", una propiedad "propiedad" y usa el valor definido en el argumento "propiedad"
// Agrega un método (funcion) llamado "saludar" que devuelva el string "Meow!"
// Devuelve el objeto
function crearObjeto(nombre, propiedad) {
       const objetomarcos={nombre:nombre,
                    propiedad:propiedad,
                     saludar:function(){
                         return "Meow!"
                     }}
    
    return objetomarcos;
}

// La funcion invocarMetodo, recibe 'metodo' que es una cadena que contiene el nombre de un método (funcion) en el objeto, Invoca ese método, no necesitas retornar nada
function invocarMetodo(objeto, metodo) {
    objeto[metodo]();
}

// La funcion agregarContacto, recibe un "usuario" que tiene una propiedad llamada "contactos" que es un array, Agrega "nuevoContacto" al final de ese array, retorna "usuario"
function agregarContacto(usuario, nuevoContacto) {
        usuario.contactos.push(nuevoContacto)

        return usuario
}

//La funcion invocarCallBack, recibe una funcion de Call Back que debe ser invocada. no es necesario retornar nada
function invocarCallBack(cb){
cb();
}

//La funcion mapearArray, recibe un Array y una funcion de CallBack, utiliza el metodo 'map' de los arreglos para recorrer el Array y generar un nuevo arreglo, retornando como resultado de cada iteracion, la funcion de CallBack recibida pasandole el item del arreglo. Retorna el nuevo arreglo
function mapearArray(array, cb){
    return array.map(cb);

}

//NO MODIFIQUES NADA DE AQUI ABAJO ↓↓↓↓↓↓↓↓↓ 
module.exports = {
    retornarArgumento,
    operacionesAritmetaicas, 
    esParOImpar,
    completarSaludo,
    juegoDeLogica,
    cuatosDigitosTiene,
    arraysDice,
    crearObjeto,
    invocarMetodo,
    agregarContacto,
    invocarCallBack,
    mapearArray

}