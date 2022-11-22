import { useState } from "react";
import  AddCategorie  from "./components/AddCategorie";

const GifExpertApp = () => {
   
  
  
  
  const [categories, setCategories] = useState(['One Punch']);


  const onAddCategorie=()=>{
      setCategories([...categories,'Hola']);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategorie setCategories ={ setCategories } />

        <ol>
            { categories
                .map(category=>{
                    return <li key={category}> {category} </li>
                }) 
            }
        </ol>
    </>
  )
}

export default GifExpertApp
