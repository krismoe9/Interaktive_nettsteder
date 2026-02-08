import { useState } from 'react';
import './App.css';

function App() {
  // Her legger du inn forhåndsdefinerte varer
  const [items, setItems] = useState([
    { id: 1, name: 'Melk', quantity: 2, bought: true },
    { id: 2, name: 'Brød', quantity: 1, bought: false }
  ]);

  return (
    <main>
      <h1>Handleliste</h1>

      {/*Ul-liste som viser alle varer */}
      <ul>
        {items.map(item => {
          //Lag ett <li> per vare
          return (
            <li key={item.id}>
              {item.name} - {item.quantity} - {item.bought ? 'Kjøpt' : 'Ikke kjøpt'}
            </li>
          )
        })}
      </ul>
    </main>
  );
}

export default App;


