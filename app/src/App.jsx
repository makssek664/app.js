import './app.css'
import {useState} from 'react';

function Input() {
    const [text, setText] = useState(""); 
    const [error, setError] = useState("");

    function handleChange(event) {
        setText(event.target.value);
        console.log(event.target.value);
        console.log(event.target.value.length);
        if(event.target.value.length > 10)
            setError("Za długie dane");
    }
    return (<><input value={text} onChange={(e) => { handleChange(e); } } placeholder='Czekam...'></input><p>Witaj... {text || "nieznajomy"}</p>{
        error 
        && <p style={{ color: 'red' }}>{error}</p>}</>);
}

export function App() {
        return ( 
        <><Input></Input></>
     );
} 