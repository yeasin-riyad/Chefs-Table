import '../../../src/index.css'

const Table = ({data,handleCooking}) => {
  const {recipe_id,recipe_name,preparing_time_minutes,calories}=data;
  return (
        <tr className="text-center text-sm fira-sans hover:bg-gray-200">
                <th>{recipe_id}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time_minutes} minutes</td>
                <td>{calories} calories</td>
                <td><button className="lexend bg-emerald-500 py-4 px-5 rounded-full text-sm font-semibold text-slate-900 hover:bg-emerald-700 lg:text-lg " onClick={()=>{
                  handleCooking(data)
                }} >Preparing</button></td>
       </tr>
       
            
     
  )
}

export default Table