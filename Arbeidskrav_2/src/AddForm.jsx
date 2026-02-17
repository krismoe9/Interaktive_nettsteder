import { useState } from 'react';
import CategoryTitle from './CategoryTitle.jsx';

//Her har jeg fått hjelp av AI til å lage skjemaet for å legge til nye varer

export default function AddForm(props) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState('');
      
    function handleSubmit(e) {
        e.preventDefault(); //hindrer siden i å refreshe

        // Konverter til tall først
            const qty = Number(quantity);

        // Valider navn
            if (!name) {
                setError("Varen må ha et navn");
                return;
            }

        // Valider antall
            if (!qty || qty < 1) {
                setError("Antall må være større enn 0");
                return;
            }

        const newItem = {
          id: Date.now(),
          name: name,
          quantity: Number(quantity),
          purchased: false
        };
    
        //sender vi newItem til App.jsx via props
        props.addItem(newItem);
    
        //nullstiller inputfeltene
        setName('');
        setQuantity('');
        setError('');
      }
    
      return (
        <form onSubmit={handleSubmit}>
          {/* Inputfelt for navn */}
          <CategoryTitle text="Vare" />
          <input
            type="text"
            placeholder="Brød"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
    
          {/* Inputfelt for antall */}
          <CategoryTitle text="Antall" />
          <input
            type="number"
            placeholder="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
    
          {/* Legg til vare-knapp */}
          <button type="submit">Legg til vare</button>
    
          {/* Feilmelding */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      );
    }
    