
import Table from '../Table/Table'
import '../../../src/index.css'
import Cooking from './Cooking/Cooking'
import { useEffect,useState } from 'react'


const Tables = ({tableData,handleCooking,cooking}) => {
    const[totalMinute,setTotalMinute]=useState(0)
     const[totalCalories,setTotalCalories]=useState(0)
     useEffect(()=>{
      cooking.forEach((obj)=>{
        setTotalMinute(totalMinute+parseFloat(obj.preparing_time_minutes))
        setTotalCalories(totalCalories+parseFloat(obj.calories))
      })

     },[cooking])

 
    
  return (
    <div>

<div className="">
   
    

  <table className="table bg-base-100 card shadow-2xl">
  <caption className="caption-top text-2xl font-semibold text-zinc-800 lexend">
            Want to cook: 0{tableData.length}
            <div className="divider"></div>
            
  </caption>


    {/* head */}
    <thead className='text-lg font-semibold text-zinc-500 fira-sans'>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((data,index)=><Table key={index} data={data} handleCooking={handleCooking}></Table>)} 
    </tbody>
  </table>
</div>

{/* Currently Cooking Section */}

<div className='my-10 w-full text-center'>
<table className="table bg-base-100 card shadow-2xl text-center">
  <caption className="caption-top text-2xl font-semibold text-zinc-800 lexend">
            Currently Cooking: 0{cooking.length}
            <div className="divider"></div>
            
  </caption>


    {/* head */}
    <thead className='text-lg font-semibold text-zinc-500 fira-sans'>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Preparation Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {cooking.map((data,index)=><Cooking key={index} data={data}></Cooking>)} 
      
    </tbody>

  </table>
  <div>
  <div className="divider"></div> 
    <h1 className='text-lg font-semibold text-zinc-500 fira-sans'><span className='font-black'>Total Time :</span> {totalMinute} minutes && <span className='font-black'>Total Calories:</span>  {totalCalories} Calories</h1>
  </div>


</div>



        
    </div>
  )
}

export default Tables