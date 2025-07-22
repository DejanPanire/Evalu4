import React from "react";

function Item({ item, deleteitem, edititem }) {
    return (
        <li style={{whiteSpace: 'pre-line'}}>
            {item.value}
            <button onClick={() => edititem(item)}>Editar</button> <br/>
            <button onClick={() => deleteitem(item.id)}>Eliminar</button> <br/>
        </li>
    );
}

export default Item;