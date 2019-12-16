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