import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>hellow Mr Tabrej</h1>
       
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img
    className="w-24 h-24 rounded-full mx-auto"
    src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww"
    alt=""
    width={384}
    height={512}
  />
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>Mohd Tabrej</div>
      <div>Software Engineer, Delhi</div>
    </figcaption>
  </div>
</figure>

    </>
  )
}

export default App
