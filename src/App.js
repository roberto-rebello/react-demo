import './App.css';
import {useState} from "react";
import NAMES from "./components/data.json";

function App() {
    const [query, setQuery] = useState("");

    const changeHandler = (changeEvent) => {
        setQuery(changeEvent.target.value);
    }
    const filteredName = NAMES.filter((item) => {return item.first_name.includes(query) || item.last_name.includes(query)})

    return (
        <div className="App">
            <input type="text" value={query} onChange={changeHandler}/>
            {
                filteredName.map((item) => (<p key={item.id}>{item.first_name} {item.last_name}</p>))
            }
        </div>
    );
}

export default App;
