import React from "react";
import Item from "./Crud";

function Liss({items, deleteitem,edititem}) {
    return(
        <ul style={{whiteSpace: 'pre-line'}}>
            {items.map((item) =>(
                <Item 
                    key={item.id}
                    item={item}
                    deleteitem={deleteitem}
                    edititem={edititem}
                />
            ))}
        </ul>
    );
}

export default Liss;