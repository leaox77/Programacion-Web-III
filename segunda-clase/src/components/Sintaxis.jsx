import { useState } from "react";

const [ nombre, setNombre ] = useState('');
const [ edad, setEdad ] = useState(0);
const [ activo, setActivo ] = useState(false);
const [ lista, setLista ] = useState([]);
const [ usuario, setUsuario ] = useState({});

const [ items, setItems ] = useState(() => {
    return JSON.parse(localStorage.getItem('items')) || []
})