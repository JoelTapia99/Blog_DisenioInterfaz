
function imprimir( actual ){
    var hijo = "<li>" + actual.nombre + "=" + actual.nivel + "</li>";
        hijo += "<ul>";
        actual.hijos.forEach( hijoActual => {
            hijo+=imprimir( hijoActual);
            
        });
        hijo+="</ul>";
        return hijo;
    }

function nodo (){
    /* debugger */
    var nodo = { nombre:"raiz", nivel:"1", hijos:[
                { nombre :"primerNodo" , nivel:"2", hijos:[
                    {nombre:"subHijo", nivel:"3", hijos:[ {nombre:"subHijo", nivel:"10", hijos:[]}

                    ] },
                    {nombre:"subHijo", nivel:"3", hijos:[ {nombre:"subHijo", nivel:"10", hijos:[] }]}
                ]}]};
    var llamada = imprimir(nodo);
    /* calcular(nodo); */
    document.getElementById("container").innerHTML = llamada;
}

/* function calcular (actual, nivel){
    if( actual.hijos == null ){
        return nivel+1;
    }
    var max = 0;
    actual.hijo.forEach(element => {
        var temp = calcular(element, nivel+1);
        if ( temp > max ){
            max=temp;
        }
    });
    return max +1;
}

 */