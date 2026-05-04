// reduce() -> recorrer el array mientras acumula un valor

// array.reduce((acumulador, itemActual) => nuevoAcumulador, valorInicial)

const numeros = [10,20,30]

//suma
const suma = numeros.reduce((acumulador, n)=> acumulador + n, 0) // => 60

const carrito = [
    {nombre: 'laptop', precio: 1000},
    {nombre: 'mouse', precio: 100},
]

const total = carrito.reduce((acumulador, item)=> acumulador + item.precio, 0)

//contar completados en una lista 
const completados = tareas.reduce((acc, tarea)=> tarea.realizado? acc + 1 : acc, 0)

// equivale a tareas.filter(tarea => tarea.realizado).length