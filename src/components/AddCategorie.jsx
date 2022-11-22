import { useState } from "react";


const AddCategorie = ({ setCategories }) => {

const [inputValue, setInputValue] = useState('One Punch')


 const onInputChange = ({target})=>{
      setInputValue( target.value );
 }

 const onSubmit=(event)=>{
    event.preventDefault();
    setCategories(categories=>[categories,...inputValue]);
 }

 console.log(setCategories);

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
