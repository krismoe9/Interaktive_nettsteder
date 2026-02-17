//Her har jeg fått hjelp av AI til å lage komponenten som viser og oppdaterer en vare i handlelisten

export default function ShoppingItem({ item, setShoppingList }) {
    function handleQuantityChange(e) {
      const newQuantity = Number(e.target.value);
  
      // Ikke tillat 0 eller negative verdier
      if (newQuantity < 1) return;
  
      // Oppdater listen i App.jsx
      setShoppingList(prev =>
        prev.map(i =>
          i.id === item.id ? { ...i, quantity: newQuantity } : i
        )
      );
    }
  
    return (
        <li>
         <input
            type="checkbox"
            checked={item.purchased}  // state fra item
            onChange={() => {
              setShoppingList(prev =>
                prev.map(i =>
                  i.id === item.id ? { ...i, purchased: !i.purchased } : i
                )
              );
            }}
          />
        {item.name}
        <input
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
            min="1"/>
        </li>
      );
    }
  
