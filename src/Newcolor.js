import React, {useState} from "react";
import {Input} from "reactstrap";

const Newcolor = ({setColor}) => {
const [newColor, setNewColor] = useState(null)
const colorSubmit = (e) =>
{
    const {value} = e.target;
    setNewColor(value);
    setColor(value);

}

return(
<Input 
type="text"
name="color"
placeholder="Enter a color"
value={newColor}
onChange={colorSubmit}
/>
)}
export default Newcolor;