function ClickHandler() {

    function clickHandler(event, count = 1) {
        console.log("Button Clicked!", count, event);
    }

    return (
        <>
        <button onClick={clickHandler}>Click</button>
        <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
        </>
    )
}

export default ClickHandler;
