

export const revisarPresupuesto = (presupuesto, restante)=>{
    let clase;

    if(restante <= (presupuesto / 4)  ){
        clase = 'alert alert-danger';
    }else if (restante <= (presupuesto / 2) ){
        clase = 'alert alert-warning';
    }else{
        clase = 'alert alert-success';
    }
    return clase;
}
