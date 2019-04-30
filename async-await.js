let getNombre = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Rabindranath`);
        }, 3000);
    });
}

console.log(getNombre);

let saludo = async() => {

    let nombre = await getNombre();

    return `hola ${ nombre }`;
}

saludo().then((msnj) => {
    console.log(msnj);
});