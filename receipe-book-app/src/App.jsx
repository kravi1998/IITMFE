
import './App.css'
import FoodList from './components/FoodList';
import Search from './components/search'
import { useState } from 'react';

function App() {

const[foodData , setFoodData] = useState(["pizza"]);
  return (
    <div className="App">
     <Search foodData={foodData} setFoodData={setFoodData()}/>
     <FoodList foodData={foodData}/>
    </div>
  )
}

export default App
