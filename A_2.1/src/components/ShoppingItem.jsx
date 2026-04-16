 import AddForm from "./AddForm";
 import ShoppingList from "./ShoppingList";

export default function ShoppingItem({ object, onToggle }) {
    return (
        <li style={{ listStyle: 'none', marginBottom: '5px' }}>
            <input 
                type="checkbox" 
                checked={object.bought} 
                onChange={onToggle} // Kjører funksjonen vi fikk fra forelderen
            />
            <span style={{ 
                marginLeft: '10px', 
                textDecoration: object.bought ? 'line-through' : 'none' 
            }}>
                {object.quantity}x {object.item}
            </span>
        </li>
    );
}