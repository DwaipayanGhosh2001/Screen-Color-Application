import React, {useState, useEffect} from "react";
import {Container} from "reactstrap";
import Newcolor from "./Newcolor";
import "./color.css"


const Color = () => {
    const [uiColor, setUiColor]= useState("");

    const getColor = newcolor => {
setUiColor(newcolor);
    }

    useEffect(()=> {
        const xcolor= localStorage.getItem("uiColor")
        if(xcolor)
        {
            setUiColor(JSON.parse(xcolor))
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem("uiColor", JSON.stringify(uiColor))
        }, [uiColor]) 


return(

<Container>
    { (uiColor !== "black") ? (
    <div className="App" style={{backgroundColor: `${uiColor}`}}>
    <center>
    <h1 style={{marginTop: "0px", paddingTop: "200px"}}>Color Change Application</h1>
    </center>
   
    <div className="text">
    <Newcolor setColor={getColor} />
    </div>
    </div> 
    ) : (
        <div className="App" style={{backgroundColor: "black", color: "white"}}>
    <center>
    <h1 style={{marginTop: "0px", paddingTop: "200px"}}>Color Change Application</h1>
    </center>
   
    <div className="text">
    <Newcolor setColor={getColor} />
    </div>
    </div> 
    )
    
}  
</Container>
)
}
export default Color;