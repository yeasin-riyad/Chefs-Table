
import Table from '../Table/Table'
import '../../../src/index.css'

const Tables = ({tableData}) => {
    
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
      {tableData.map((data,index)=><Table key={index} data={data}></Table>)} 
    </tbody>
  </table>
</div>
        
    </div>
  )
}

export default Tables