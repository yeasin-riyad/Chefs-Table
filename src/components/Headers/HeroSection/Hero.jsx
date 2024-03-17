import '../../../../src/index.css'

const Hero = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/bsGthQy/Rectangle-1.png)]  rounded-lg bg-cover bg-center bg-origin-border  ">
        <div className="lexend px-5 text-center flex flex-col items-center gap-y-7 lg:px-44 py-28">
            <h1 className='text-5xl font-bold text-white'>
                     Discover an exceptional cooking class tailored for you!

            </h1>
            <p className='text-xl font-light text-white'>
            Cooking classes and Culinary Education  have evolved into dynamic experiences that not only teach culinary skills but also drive revenue generation, foster community, and eventually brand building.

            </p>
            <div className='flex justify-center gap-x-9'>
                <button className="bg-emerald-500 py-3 px-7 rounded-full hover:bg-emerald-700">Explore Now</button>
                <button className="text-white py-3 px-7 border-2 border-white border-solid rounded-full hover:bg-emerald-400">Our Feedback</button>

            </div>
        </div>

    </div>
  )
}

export default Hero