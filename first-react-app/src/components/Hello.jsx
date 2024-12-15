const name="Ravi Kumar"
function getMessage(){
    return "Heyy"
}
function Hello(props){
    return(
    <div>
      <h1>I am learning react's components</h1>
      <p>My Name is {name}</p>
      <p>{getMessage()}</p>
      <p>Name from props {props.name}</p>
      <p>Message from Props {props.message}</p>
    </div>
    )
}

export default Hello;