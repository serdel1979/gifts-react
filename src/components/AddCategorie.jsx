import { useState } from "react";


const AddCategorie = ({ addCategory }) => {

const [inputValue, setInputValue] = useState('One Punch')


 const onInputChange = ({target})=>{
      setInputValue( target.value );
 }

 const onSubmit=(event)=>{
    event.preventDefault();
    if( inputValue.trim().length <= 4)return;
    
    addCategory(categories=>[...categories,inputValue]);
    setInputValue('');
 }


  return (
    <form onSubmit={(event)=> onSubmit(event)}>
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
