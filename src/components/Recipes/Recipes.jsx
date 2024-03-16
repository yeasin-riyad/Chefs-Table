import { useEffect } from "react";
import { useState } from "react"
import Recipe from "../Recipe/Recipe";
import Tables from "../Tables/Tables";


const Recipes = () => {
    const [recipes,setRecipes]=useState([]);
    const [tableData,setTableData]=useState([]);
    const handleTableData=(obj)=>{
        if(!tableData.includes(obj))
             setTableData([...tableData,obj])
    }
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
  return (
    <div className="grid grid-cols-1 gap-y-7 lg:grid-cols-3 gap-x-4">
        <div className=" grid grid-cols-1  gap-x-4 gap-y-2 lg:grid-cols-2 col-span-2 ">
            {
                recipes.map(recipe=><Recipe  key={recipe.recipe_id} recipe={recipe} handleTableData={handleTableData}></Recipe>)
            }
        </div>
        <div>
            {/* <Table tableData={tableData} ></Table> */}
            <Tables tableData={tableData}></Tables>
        </div>
        
        
    </div>
  )
}

export default Recipes