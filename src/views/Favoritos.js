import MyContext from "../MyContext";
import { useContext } from "react";


export default function Favoritos() {
  
  const {fotos, setFotos}=useContext(MyContext)
console.log("prueba",fotos,)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       {fotos.filter((foto)=>foto.liked).map((foto)=>
        <div
        className="foto"
        style={{ backgroundImage: `url(${foto.src})` }}
        key={foto.id}
      >
        <p>{foto.descrip}</p>
      </div>       
       )
       }
      </div>
    </div>
  );
}
