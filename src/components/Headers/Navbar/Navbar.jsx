import '../../../../src/index.css'

const Navbar = () => {
  return (
    <div className="lexend navbar bg-base-100 flex flex-col  gap-y-5 items-center my-5 lg:flex-row justify-between">
           <div className="flex justify-center">
                <a className=" btn btn-ghost text-4xl font-bold text-slate-900">Recipe Calories</a>
           </div>

           <div className="flex gap-x-5">
           <button className="btn btn-outline">Home</button>
           <button className="btn btn-outline btn-primary">Recipes</button>
           <button className="btn btn-outline btn-secondary">About</button>
           <button className="btn btn-outline btn-accent">Search</button>
           </div>
           <div>
            {/*  */}

            <div className="flex gap-x-5">
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>

            <div className="w-12">
                <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            </div>
           

            

            {/*  */}
           </div>
    </div>
  )
}

export default Navbar