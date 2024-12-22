export default function Message(){
    function handleClick(){
        console.log("Button Clicked")
    }
    return(
        <button onClick={handleClick}> Click Me </button>
    );
}