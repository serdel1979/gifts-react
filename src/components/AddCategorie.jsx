import { useState } from "react";
import PropTypes from 'prop-types';


export const AddCategorie = ({ onNewCategory }) => {

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
    <form onSubmit={onSubmit} aria-label="form">
        <input
            type="text"
            placeholder="Buscar gift"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

AddCategorie.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}