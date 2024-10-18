import { propiedades_alquiler } from "./alquiler.js";
import { propiedades_venta } from "./venta.js";

const propiedadesAlquilerIndex = document.querySelector("#propiedadesAlquilerIndex");

const mostrarDataAlquilerTotal = () => {
for (let index = 0; index < 3; index++) {
    const {
    nombre,
    src,
    descripcion,
    ubicacion,
    habitaciones,
    baños,
    costo,
    smoke,
    pets,
    } = propiedades_alquiler[index];

    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
    <div class="card">
        <img
            src=${src}
            class="card-img-top"
            alt="Imagen del departamento"/>
            <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${habitaciones}
            <i class="fas fa-bath"></i> ${baños}</p>
            <p><i class="fas fa-dollar-sign"></i> ${costo}</p>

        ${
        smoke
            ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar</p>'
            : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
        }

        ${
        pets
            ? '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas</p>'
            : '<p class="text-danger"> <i class="fas fa-ban"></i> No se permiten mascotas</p>'
        }
    </div>
    `;

    propiedadesAlquilerIndex.appendChild(card);
}
};

const propiedadesVentaIndex = document.querySelector("#propiedadesVentaIndex");

const mostrarDataVentaTotal = () => {
for (let index = 0; index < 3; index++) {
    const {
    nombre,
    src,
    descripcion,
    ubicacion,
    habitaciones,
    baños,
    costo,
    smoke,
    pets,
    } = propiedades_venta[index];

    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
    <div class="card">
        <img
            src=${src}
            class="card-img-top"
            alt="Imagen del departamento"/>
        
            <div class="card-body">
            
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${habitaciones}
            <i class="fas fa-bath"></i>${baños}</p>
            <p><i class="fas fa-dollar-sign"></i> ${costo}</p>

        ${
        smoke
            ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar</p>'
            : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
        }

        ${
        pets
            ? '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas</p>'
            : '<p class="text-danger"> <i class="fas fa-ban"></i> No se permiten mascotas</p>'
        }
    </div>
    `;

    propiedadesVentaIndex.appendChild(card);
}
};

mostrarDataAlquilerTotal();
mostrarDataVentaTotal();
