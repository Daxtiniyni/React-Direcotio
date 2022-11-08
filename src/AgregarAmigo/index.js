import React from "react";


function AgregarAmigo(){
    const miFuncion=()=>{
        console.log("Si jala men");
    }
    return(
        <button onClick={miFuncion}>+Amigo</button>
    );
}

export default AgregarAmigo;