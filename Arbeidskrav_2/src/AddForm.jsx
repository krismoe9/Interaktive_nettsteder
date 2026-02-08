import { useState } from 'react'; // alltid øverst

function AddForm(props) {
  //State for input
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  //Funksjon som kjører når knappen trykkes
  function handleSubmit() {
    // 👇 Lag objekt for ny vare
    const newItem = {
      name: name,
      quantity: Number(quantity),
      bought: false
    };

    //Send objektet til App via funksjon i props
    props.addItem(newItem);

    //Tøm inputfeltene etter at varen er lagt til
    setName('');
    setQuantity('');
  }

  //Returner skjemaet
  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button type="button" onClick={handleSubmit}>Legg til</button>
    </form>
  );
}

export default AddForm;

  