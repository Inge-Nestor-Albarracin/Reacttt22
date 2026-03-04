import { useState } from "react";

function String(){
    const [texto, setTexto]= useState ("Nestor");
    return(
        <div>
            <h3>{texto}</h3>
            <input
            
            type="text" 
            onChange={(e) => setTexto(e.target.value)}
            / >
        </div>
    )

}

export default String