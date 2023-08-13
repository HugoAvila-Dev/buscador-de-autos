//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max-10;



//Eventos
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos();// muestra los automoviles al cargar


    //Llena las opciones de años
    llenarSelect();
})



//Funciones
function mostrarAutos() {
    autos.forEach( auto => {

        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;
        //insertar en el HTML
        resultado.append(autoHTML);
    });
}

//Genera los años del select 
function llenarSelect() {
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}