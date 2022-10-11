class Producto {

    constructor(producto, marca, mascota, etapa, tamanio, descripcion, precio, valoracion, id) {
        this.producto = producto;
        this.marca = marca;
        this.mascota = mascota;
        this.etapa = etapa;
        this.tamanio = tamanio;
        this.descripcion = descripcion;
        this.precio = parseInt(precio);
        this.valoracion = parseInt(valoracion);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }

    valorar(valoracion) {
        this.valoracion = parseInt(valoracion);
    }


}

const productos = [
    new Producto('Alimento', 'Hills', 'Perro', 'Adulto', '15kg', 'Hills Alimento para perro adulto para bajar de peso', 2500, 10, 1),
    new Producto('Alimento', 'Hills', 'Perro', 'Cachorro', '5kg', 'Hills Alimento para después de la lactancia', 1000, 8, 2),
    new Producto('Alimento', 'Hills', 'Perro', 'Senior', '8kg', 'Hills Alimento para adulto mayor raza pequeña', 1500, 10, 3),
    new Producto('Alimento', 'Royal Canin', 'Perro', 'Adulto', '13kg', 'Alimento para perro adulto para las articulaciones', 2200, 10, 4),
    new Producto('Alimento', 'Royal Canin', 'Perro', 'Cachorro', '3kg', 'Alimento para cachorros', 880, 8, 5),
    new Producto('Alimento', 'Royal Canin', 'Perro', 'Senior', '11kg', 'Alimento para adulto mayor, enfermedades cardiacas', 2800, 9, 6),
    new Producto('Alimento', 'Nupec', 'Perro', 'Adulto', '20kg', 'Alimento para adultos raza grande', 1700, 7, 7),
    new Producto('Alimento', 'Nupec', 'Perro', 'Cachorro', '7kg', 'Alimento para cachorro raza grande', 1000, 7, 8),
    new Producto('Alimento', 'Nupec', 'Perro', 'Senior', '15kg', 'Alimento para adulto mayor, gastrointestinal', 2600, 8, 9),
    new Producto('Alimento', 'Proplan', 'Perro', 'Adulto', '15kg', 'Alimento para perras lactantes raza grande', 2300, 9, 10),
    new Producto('Alimento', 'Proplan', 'Perro', 'Cachorro', '2kg', 'Alimento para cachorros raza pequeña', 900, 9, 11),
    new Producto('Alimento', 'Proplan', 'Perro', 'Senior', '8kg', 'Alimento para adulto mayor con vitaminas y minerales', 1400, 9, 12)
]







//--------------------------Buscar en el array de acuerdo a lo que se elija-----------------------------//

let criterio = prompt('Elegir el criterio deseado:\n1 - Marca (A a Z) \n2 - Mejor a peor valoración \n3 - Búsqueda por Marca \n4 - Realizar la Compra (Búsqueda de Alimentos por Descripción)');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.marca.localeCompare(b.marca));
            return nombreAscendente;
        case '2':
            return arrayOrdenado.sort((a, b) => b.valoracion - a.valoracion);
        case '3':
            //--------------------------Filtrar productos de acuerdo a la Marca-----------------------------//
            let marcaAlimento = prompt('Escribe el nombre de la marca del alimento que estás buscando');

            const filtrado = productos.filter((producto) => producto.marca.toLowerCase().includes(marcaAlimento.toLowerCase()))

            //----------------------Fin de filtrar productos de acuerdo a la Marca-------------------------//


            //--------------------------Mostrar alimentos filtrados de acuerdo a la marca-----------------------------//

            if (filtrado.length == 0) {
                alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo');
            } else {
                const imprimible = filtrado.map((producto) => producto.descripcion);
                alert('Los alimentos con la marca seleccionada son los siguientes:\n- ' + imprimible.join('\n- '));
            }
            return marcaAlimento;

        case '4':
            //--------------------------Filtrar productos de acuerdo a la Descripción y realizar la Compra-----------------------------//
            let descripcionAlimento = prompt('Describe algún alimento que estás buscando');

            const filtradoAlimento = productos.filter((producto) => producto.descripcion.toLowerCase().includes(descripcionAlimento))

            //----------------------Fin de filtrar libros de acuerdo al autor-------------------------//


            //--------------------------Mostrar el total de la compra-----------------------------//

            if (filtradoAlimento.length == 0) {
                alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo');
            } else {
                const imprimiblePrecio = filtradoAlimento.map((producto) => producto.precio);
                const alimentoCarrito = imprimiblePrecio.reduce((acumulador, precio) => acumulador + precio, 0);
                //console.log(alimentoCarrito);
                alert('El total de sus productos es:\n ' + '$' + alimentoCarrito);
            }
            return descripcionAlimento
        //----------------------Fin de mostrar el total de la compra-------------------------//
        default:
            alert('No es un criterio válido');
            break;
    }
}

//----------------------Fin de ordenar el array de acuerdo a lo que se elija----------------------//

function crearStringResultado(array) {
    let info = '';

    array.forEach(elemento => {
        info += 'Producto: ' + elemento.producto + '\nMarca: ' + elemento.marca + '\nMascota: ' + elemento.mascota + '\nEtapa: ' + elemento.etapa + '\nPrecio: ' + elemento.precio + '\nValoración: ' + elemento.valoracion + ' puntos.\n\n'
    })

    return info;
}

//--------------------------Fin de crear el string con los resultados-----------------------------//

alert(crearStringResultado(ordenar(criterio, productos)));


