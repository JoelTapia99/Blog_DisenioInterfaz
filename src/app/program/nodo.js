
function Nodo (){
    nombre= "";
    ponderacion= "";
    nota= "";
    hijos= [];
    
    this.imprimir = ( actual ) => {
        document.write(actual.nombre);
        for (let i = 0; i < actual.length; i++) {
            const element = array[i];
            imprimir(actual.hijos.get(indice));
        }
    }
    
    this.calcularNotaPonderacion = ( actual ) =>{
        if ( actual.hijos == null ) {
            return (actual.nota * actual.ponderacion)/100;
        }
        
        for (let i = 0; i < array.hijos.length; i++) {
            actual.nota+=calcularNotaPonderacion(actual.hijos[i]);            
        }
        return (actual.nota * actual.ponderacion)/100;
        
    }
    
    this.calcularNota = ( actual )=>{
        if ( actual.hijos == null ) {
            nota = (actual.nota * actual.ponderacion) / 100;
            return nota;
        }
        promedio = 0;
        
        for (let i = 0; i < actual.hijos.length; i++) {
            promedio += calcularNota(actual.hijos[i]);
            
        }
        return promedio;
    }
    
}

/* var raiz = new Nodo();
raiz.nombre = 'Fase Teórica';

console.log(raiz.nombre); */


//Creacion de rama principal
var raiz = new Nodo();
raiz.nombre = "Fáse Teorica";
//nodos(parciales)
var nodo1 = new Nodo();
nodo1.nombre = "Primer Parcial";
nodo1.ponderacion = 50;
raiz.hijos.push(nodo1);

//evaluacion del Parcial-1
var formativoPar_1 = new Nodo();
formativoPar_1.nombre = "Formativo del Primer Parcial";
formativoPar_1.ponderacion = 50;
nodo1.hijos.push(formativoPar_1);

//Vinculación
var vinculacion = new Nodo();
vinculacion.nombre = "Nota de Vinculacion";
vinculacion.nota = 100;
vinculacion.ponderacion = 25;
formativoPar_1.hijos.push(vinculacion);
//Autonomo
var Autonomo = new Nodo();
Autonomo.nombre = "notas de autonomo";
Autonomo.nota = 100;
Autonomo.ponderacion = 25;
formativoPar_1.hijos.push(Autonomo);
//Investigacion
var Investigacion = new Nodo();
Investigacion.nombre = "Notas de investigacion";
Investigacion.nota = 100;
Investigacion.ponderacion = 25;
formativoPar_1.hijos.push(Investigacion);
//Evaluacion
var evaluacion = new Nodo();
evaluacion.nombre = "Notas de Evaluacion";
evaluacion.nota = 100;
evaluacion.ponderacion = 25;
formativoPar_1.hijos.push(evaluacion);

console.log(raiz.calcularNota(evaluacion));
