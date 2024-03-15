

import './App.css'
import Hero from './components/Headers/HeroSection/Hero'
import Navbar from './components/Headers/Navbar/Navbar'
import Main from './components/MainSection/Main'
import Recipes from './components/Recipes/Recipes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full mx-auto lg:w-5/6 '>

        <Navbar></Navbar>
        <Hero></Hero>
        <Main></Main>
        <Recipes></Recipes>
    
        

      
      </div>
    </>
  )
}

export default App
