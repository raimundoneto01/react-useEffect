import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [contador, setContador] = useState(0)
  const [lista, setLista] = useState([])

  const incrementar = () => {
    setContador(contador + 10)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => {
        setLista(data.splice(0, 10))
      })
  },[])  // useEffect ....usado para fazer requisições de APIS ,  o .then para transformar em json...

  return (
    <>
      {/* <h1>{`contador:`}</h1>
      <button onClick={incrementar}> SOMAR: {contador}</button> */}

<h1>ALBUM DE FOTO</h1>

    <div className="container">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {lista.map(foto => {
        return(  <Card key={foto.id}  id={foto.id}  texto={foto.title}  foto={foto.thumbnailUrl} />)
        })}
      </div>
    </div>
    </>
  )
}

export default App


