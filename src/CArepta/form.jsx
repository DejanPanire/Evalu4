import React,{useState, useEffect} from "react";

function Form ({itemeditable, itemparaeditar}){
    const[inputValue, seiInputValue] = useState("");

    useEffect(()=>{
        if (itemparaeditar){
            seiInputValue(itemparaeditar.value);
        } else {
            seiInputValue("");
        }
    },[itemparaeditar]);
    const HandleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim()){
            itemeditable(inputValue);
            seiInputValue("");
        }
    };

    return(
        <form onSubmit={HandleSubmit}>
            <input type="text" value={inputValue} onChange={(e)=>seiInputValue(e.target.value)}/>
            <button type="submit">{itemparaeditar ? 'actualizar':'agregar'}</button>
        </form>
    );
}

export default Form;