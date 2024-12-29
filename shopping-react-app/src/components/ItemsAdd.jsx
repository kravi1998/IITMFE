import { useState } from "react";

export default function ItemsAdd(){
    const [data , setData] = useState({itemName:"",itemPrice:"",itemQty:""});
    const [shoppingList, setShoppingList] =useState([]);

    function handleChange(e){
        const {name , value} = e.target;
        console.log(e);
        setData({...data,[name]:value});

    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(data);
        setShoppingList((prevList) => [
            ...prevList,
            { itemName: data.itemName, itemPrice: data.itemPrice, itemQty: data.itemQty },
          ]);
          setData({ itemName: "", itemPrice: "", itemQty: "" });
          console.log(shoppingList);
    }
    return (
     <div>
        <form>
            <label >Item Name</label><br></br>
            <input name="itemName" type="text" onChange={handleChange} value={data.itemName}></input><br></br>
            <label >Item Price</label><br></br>
            <input name="itemPrice" type="number" onChange={handleChange} value={data.itemPrice}></input><br></br>
            <label >Item Qty</label><br></br>
            <input name="itemQty" type="number" onChange={handleChange} value={data.itemQty}></input><br></br>
            <button type="submit" onClick={(e)=>{
                handleSubmit(e);
            }}>Submit</button>

        </form>
        <div>
        <h3>Shopping List:</h3>
        <ul>
          {shoppingList.map((item, index) => (
            <li key={index}>
              name : {item.itemName} 
              Price : {item.itemPrice} 
              Quantity : {item.itemQty}
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
}