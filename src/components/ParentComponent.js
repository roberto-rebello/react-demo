import ChildComponent from "./ChildComponent"

function ParentComponent() {
    const greetParent = (childName) => {
        alert(`Hello parent of ${childName}`);
    }

    return (
        <ChildComponent greetHandler={greetParent}/>
    )
}

export default ParentComponent;
