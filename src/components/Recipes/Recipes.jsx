import { useEffect } from "react";
import { useState } from "react"
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
  return (
    <div>
        <div>
            {
                recipes.map(recipe=><Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
            }
        </div>
        
        
    </div>
  )
}

export default Recipes