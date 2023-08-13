//Variables
const resultado = document.querySelector('#resultado');


//Eventos
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos();
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