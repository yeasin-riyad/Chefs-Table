

const Cooking = ({data}) => {
    const {recipe_id,recipe_name,preparing_time_minutes,calories}=data;
   
  
  return (
    

   
    <tr className="text-center text-sm fira-sans hover:bg-gray-200">
    <th>{recipe_id}</th>
    <td>{recipe_name}</td>
    <td>{preparing_time_minutes} minutes</td>
    <td>{calories} calories</td>
    
    
    </tr>


 
   

    

 

  )
}

export default Cooking