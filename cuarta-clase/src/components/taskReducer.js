export const estadoInicial = [];

/*
lista:

["barrer piso", "estudiar"]
    index: 0     index: 1

al aplicar filtro creamos un nuevo vector []
este vector solo se llena de los elemenos que su index no sea igual al que queremos eliminar
es decir: si queremos borrar "estudiar", el index es 1
entonces en mi nuevo vector [], entrara el index 0 --> "barrer piso"

action puede verse asi:
{
    type: "ADD_TASK",
    payload: "Comer almuerzo"
}
*/

export function taskReducer(state, action) {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload];
        
        case "DELETE_TASK":
            return state.filter(
                (_, index) => index !== action.payload
            );

        default:
            return state;
    }
}