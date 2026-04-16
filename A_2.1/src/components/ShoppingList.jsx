import { useState } from "react"
import AddForm from "./AddForm"
import ShoppingItem from "./ShoppingItem"

export default function ShoppingList() {

    const [list, setList ] = useState( [
        { item: "Melk", quantity: 2, bought: false},
        { item: "Smør", quantity: 1, bought: false}
    ])


    const addItem = (itemName, itemQuantity) => {
        const newItem = {
            item: itemName, 
            quantity: itemQuantity, 
            bought: false 
        }
        setList([...list, newItem])
    }

    const toggleBought = (index) => {
        const updatedList = [...list]
        updatedList[index].bought = !updatedList[index].bought

        setList(updatedList)
    }

    return (
        <section>
            {/* Vi sender addItem-funksjonen ned til AddForm */}
            <AddForm onAdd={addItem} />

            <ul>
                {list.map((object, index) => (
                    <ShoppingItem 
                        key={index} 
                        object={object} 
                        onToggle={() => toggleBought(index)} 
                    />
                ))}
            </ul>
        </section>
    )
}