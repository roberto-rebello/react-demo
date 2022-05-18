import {useState} from "react";

function Message(props) {
    const [message, setMessage] = useState("Welcome Visitor!");

    return (
        <>
        <h1>{message}</h1>
        <button onClick={() => setMessage("Thank you for subscribing!")}>Subscribe!</button>
        </>
)
}

export default Message;
