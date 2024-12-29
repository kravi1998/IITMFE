import { useState } from "react";

export default function Form(){
    const [data , setData] = useState({firstName :"",lastName:"",email:"",phoneNumber:""});
     function handleChange(e)
     {
        const {name , value} = e.target;
        console.log(e);
        setData({...data,[name]:value})
     }
     function handleSubmit(e){
        e.preventDefault();
        console.log(data)
     }
    return(
        <div>
            <form>
                <label>First Name</label>
                <input name="firstName" type="text" onChange={handleChange} value={data.firstName}></input>
                <label>Last Name</label>
                <input name="lastName" type="text" onChange={handleChange} value={data.lastName}></input>
                <label>Email Address</label>
                <input name="email" type="text" onChange={handleChange} value={data.email}></input>
                <label>Phone Number</label>
                <input name="phoneNumber"type="text" onChange={handleChange} value={data.phoneNumber}></input>
                <button type="submit" onClick={(e)=>{
                    handleSubmit(e);
                }}>Submit</button>
            </form>
        </div>
    );
}