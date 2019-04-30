let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Rabindranath'
}, {
    id: 3,
    nombre: 'Luis'
}, {
    id: 4,
    nombre: 'Pedro'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}, {
    id: 3,
    salario: 3000
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });
}

getEmpleado(10).then(empleado => {
    console.log(`Emplado DB`, empleado);
}, (error) => {
    console.log(error);
})