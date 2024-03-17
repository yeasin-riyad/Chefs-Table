import { useEffect } from "react";
import { useState } from "react"
import Recipe from "../Recipe/Recipe";
import Tables from "../Tables/Tables";
import toast, { Toaster } from 'react-hot-toast';



const Recipes = () => {
    const [recipes,setRecipes]=useState([]);
    const [tableData,setTableData]=useState([]);
    const [cooking,setCooking]=useState([]);
    const handleTableData=(obj)=>{
      
        if(!tableData.includes(obj))
             setTableData([...tableData,obj])
         else{
            
            toast.success('You Already Added This Item !!! Please Click Preparing Button.Then you Can again Order...');

         } 
         
    }
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

    const handleCooking=(obj)=>{
        setCooking([...cooking,obj])
        setTableData (tableData.filter(data=>data.recipe_id !== obj.recipe_id));
         
    }
  return (
    <div className="grid grid-cols-1 gap-y-7 lg:grid-cols-3 gap-x-4">
        <div className=" grid grid-cols-1  gap-x-4 gap-y-2 lg:grid-cols-2 col-span-2 ">
            {
                recipes.map(recipe=><Recipe  key={recipe.recipe_id} recipe={recipe} handleTableData={handleTableData}></Recipe>)
            }
        </div>
        <div className="col-span-1 w-full">
           
            <Tables tableData={tableData} handleCooking={handleCooking} cooking={cooking}></Tables>
        </div>
         <Toaster position="top-right" />
        
    </div>
  )
}

export default Recipes