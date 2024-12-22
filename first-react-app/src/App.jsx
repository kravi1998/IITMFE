import './App.css'
import Hello from './components/Hello'
import Footer from './components/Footer'
import Header from './components/Header'
import ArrayDisplay from './components/ArrayExample'
import ProductDisplay from './components/Products'
import Message from './components/Message'
function App() {
  return (
    <div className="App">
      <Header/>
      <Message/>
      <Hello name="Ravi" message="Heyy, Welcome to React App"/>
      <Hello name="Shubham"/>
      <Hello message="Heyy......"/>
      <Hello/>
      <ArrayDisplay products={["Apple","Banana","Orange"]} />
      <ProductDisplay/>
      <Footer/>
    </div>
    
  )
}

export default App
