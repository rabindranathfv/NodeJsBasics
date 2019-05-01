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

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`no existe un salario para el empleado ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
};

// getEmpleado(4).then(empleado => {
//     console.log(`Chain
//     Chain`);

//     return getSalario(empleado);

// }).then(salario => {
//     console.log(`El salario que gana ${ salario.nombre } es de ${ salario.salario}`);
// }).catch(err => {
//     console.log(err);
// });

let getInformacion = async(id) => {
    console.log(`async-await function`);
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    console.log(empleado);
    console.log(salario);
    return `${ salario.nombre} tiene un salario de ${ salario.salario }`;
}

getInformacion(1).then(resp => {
    console.log(resp);
}, err => {
    console.log(err);
});


getInformacion(6).then(resp => {
    console.log(resp);
}, err => {
    console.log(err);
});