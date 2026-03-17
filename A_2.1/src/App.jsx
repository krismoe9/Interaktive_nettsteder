import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ShoppingList from './components/ShoppingList'
import FormTitle from './components/FormTitle'

function App() {

 const [shoppingList, setShoppingList] =useState([
  { id: 1, name: "Melk", quantity: 1, purchased: false },
  { id: 2, name: "Ost", quantity: 12, purchased: true },
  { id: 3, name: "Smør", quantity: 1, purchased: false }
])

  return (
    <section className='Section'>
    <FormTitle />

    <ShoppingList />
    </section>
  )


}

export default App
