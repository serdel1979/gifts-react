import { useState } from "react";


const AddCategorie = ({ onNewCategory }) => {

const [inputValue, setInputValue] = useState('')


 const onInputChange = ({target})=>{
      setInputValue( target.value );
 }

 const onSubmit=(event)=>{
    event.preventDefault();
    const inputVal = inputValue.trim();
    if( inputVal.length <= 3)return;
    
    onNewCategory(inputVal);
    setInputValue('');
 }


  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar gift"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

export default AddCategorie
