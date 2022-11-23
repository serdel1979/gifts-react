import { useState } from "react";
import  AddCategorie  from "./components/AddCategorie";
import { GiftGrid } from "./components/GiftGrid";

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
        <h3>GifExpertApp</h3>

        <AddCategorie 
            onNewCategory = { onAddCategorie }
        />

            { categories
                .map(category=>{
                    return <GiftGrid 
                              key={ category} 
                              category = {category}
                            />
                }) 
            }
    </>
  )
}

export default GifExpertApp
