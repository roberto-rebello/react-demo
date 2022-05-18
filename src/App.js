import './App.css';
import {useState, useTransition} from "react";
import NAMES from "./components/data.json";

function App() {
    const [query, setQuery] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [isPending, startTransition] = useTransition();

    const changeHandler = (changeEvent) => {
        setInputValue(changeEvent.target.value);
        startTransition(() => setQuery(changeEvent.target.value));
    }
    const filteredName = NAMES.filter((item) => {return item.first_name.includes(query) || item.last_name.includes(query)})

    return (
        <div className="App">
            <input type="text" value={inputValue} onChange={changeHandler}/>
            {isPending && <p>Updating List...</p>}
            {
                filteredName.map((item) => (<p key={item.id}>{item.first_name} {item.last_name}</p>))
            }
        </div>
    );
}

export default App;
