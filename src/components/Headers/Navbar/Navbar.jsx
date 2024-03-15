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
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-40 md:w-auto" />
            </div>

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