//Her har jeg fått hjelp av AI til å lage komponenten som viser hele handlelisten

import ShoppingItem from './ShoppingItem.jsx';

export default function ShoppingList({ shoppingList, setShoppingList }) {
  return (
    <ul>
      {shoppingList.map((item) => (
        <ShoppingItem 
          key={item.id} 
          item={item} 
          setShoppingList={setShoppingList} 
        />
      ))}
    </ul>
  );
}


