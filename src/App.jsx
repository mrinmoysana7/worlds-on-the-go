import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

// const countriesPromise = async () => {
//   const res = await fetch("https://openapi.programming-hero.com/api/all")
//   return res.json();
// }

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>    
      <h1>Get started</h1> 
      <Suspense fallback={<p>Countries are loading.......</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>   
    </>
  )
}

export default App
