import react, {useState} from 'react';

function ColorPicker(){

    const [color, setColor] = useState("");

    function handlerColor(e){
        setColor(e.target.value);
    }
    return(<div className="color-picker-container">
        <h1>Color Picker</h1>
        <div style={{backgroundColor:color}} className="color-display"> 
            <p>Selected Color:{color}</p>
        </div>
        <label>Select Color</label>
        <input type="color" value={color} onChange={handlerColor}/>
    </div>

    );
}

export default ColorPicker