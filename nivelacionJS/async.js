
const obtUsuario = async() =>{
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const datos = await resp.json()
        console.log(datos)
    } catch (e) {
        console.log(e)
    }
}
obtUsuario();
