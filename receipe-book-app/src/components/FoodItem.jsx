export default function FoodItem({food}){
 return(
    <div>
        <h1>{food.title}</h1>
        <button onClick={()=>{console.log(item)}}></button>
    </div>
 );
}