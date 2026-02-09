import { useState } from 'react';
import './App.css';
import ShoppingList from './ShoppingList.jsx';
import AddForm from './AddForm.jsx';
import CategoryTitle from './CategoryTitle.jsx';



function App() {
  const [shoppingList, setShoppingList] = useState([
    { id: 1, name: "Brød", quantity: 1, purchased: false },
    { id: 2, name: "Egg", quantity: 12, purchased: true },
    { id: 3, name: "Ost", quantity: 1, purchased: false }
  ])
  
  return (
    <main>
      <h1>Handleliste</h1>
      
      {/*Skjema*/}
      <CategoryTitle />
      <AddForm addItem={(newItem) => setShoppingList(prev => [newItem, ...prev])}/>
     
      {/*ShoppingListe*/}
      <ShoppingList shoppingList={shoppingList} setShoppingList={setShoppingList}/>

    </main>
  );
  
}

export default App;


