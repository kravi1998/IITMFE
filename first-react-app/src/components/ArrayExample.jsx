function ArrayDisplay({products}){
  return(
    <div>
        <p>This is Product list</p>
    <ul>
        {products.map((product)=>(
         <li key={product}>{product}</li>
        ))}
    </ul>
    </div>
  )
}
export default ArrayDisplay;