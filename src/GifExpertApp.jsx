import { useState } from "react";
import  AddCategorie  from "./components/AddCategorie";

const GifExpertApp = () => {
   
  
  
  
  const [categories, setCategories] = useState([]);


  const onAddCategorie=( category )=>{
    if (categories.includes(category)){
        alert(`Ya existe ${category}`);
        return;
    }
    setCategories([...categories,category]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategorie 
            // addCategory = { setCategories } 
            onNewCategory = { (value)=>onAddCategorie(value) }
        />

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
