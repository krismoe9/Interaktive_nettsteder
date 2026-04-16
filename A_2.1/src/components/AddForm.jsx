import { useState } from "react"
import UnderTitle from "./UnderTitle"

export default function AddForm({onAdd}) {
    
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.trim() === "")
            return

        onAdd(name, quantity);

        setName("")
        setQuantity(1)
    }


    return (
        <section className="addForm">
            <form onSubmit={handleSubmit}>
            <UnderTitle text="Varenavn" />
            <input value={name} onChange={(e) => setName(e.target.value)} />

            <UnderTitle text="Antall" />
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} /> <br></br>
            <button type="submit">Legg til</button>
            </form>
        </section>
    )
}