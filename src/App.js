import React,{useState} from 'react'

function App() {
  const [a,setA] = useState(0)
  return (
    <>
    {console.log("Component rendered")}
    <h1>App a = {a} </h1>
    <button onClick={ () => { setA(0) } } > increment </button>
    </>
  )
}

export default App