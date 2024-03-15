import PropTypes from 'prop-types';
import {  FaRegClock,FaFire  } from "react-icons/fa";
import '../../../src/index.css'

const Recipe = ({recipe}) => {
    const {recipe_id,recipe_name,short_description,ingredients,preparing_time_minutes,calories,recipe_image}=recipe;
  return (
    <div>
        <div>
            {/*  */}

            <div className="card w-full bg-base-100 shadow-xl lg:w-2/6 ">
  <figure className="px-3 pt-3">
    <img src={recipe_image} alt={recipe_name} className="rounded-xl" />
  </figure>
  <div className="card-body items-left text-left">
    <h2 className="card-title lexend">{recipe_name}</h2>
    <p className='fira-sans text-zinc-500 text-lg font-normal'>{short_description}</p>
    <div className="divider"></div> 
    
    {/* ingredients */}
    <h1 className='text-xl font-bold lexend'>Ingredients:{ingredients.length}</h1>
    <ul className='list-inside'>
        {ingredients.map((ingredient,index)=><li className='list-disc text-left text-lg font-normal fira-sans text-zinc-500' key={index}> {ingredient}</li>)}
    </ul>
    <div className="divider"></div> 

    <div className='flex justify-between items-center text-lg font-normal fira-sans text-zinc-500'>
        <div className='flex gap-x-3 items-center'>
        <FaRegClock />
        <h1>{preparing_time_minutes} minutes</h1>
        </div>
        <div className='flex items-center gap-x-3'>
        <FaFire />
        <h1>{calories} calories</h1>
        </div>
    </div>
    <div className="card-actions my-3">
         <button className="lexend bg-emerald-500 py-4 px-9 rounded-full text-xl font-semibold text-slate-900 hover:bg-emerald-700">Want to Cook</button>
    </div>
  </div>
</div>

            {/*  */}
        </div>
        
    </div>

  )
}

Recipe.PropTypes={
    recipe:PropTypes.object
}

export default Recipe