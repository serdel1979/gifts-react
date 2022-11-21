import { useState } from "react";
import * as R from 'ramda';


const AddCategorie = ({ setCategories }) => {

const [inputValue, setInputValue] = useState('One Punch')


 const onInputChange = ({target})=>{
      setInputValue( target.value );
 }

 const onSubmit=(event)=>{
    event.preventDefault();
    setCategories(categories=>[categories,...inputValue]);
 }


  return (
    <form onSubmit={(vent)=> onSubmit(event)}>
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
