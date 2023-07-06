import { useContext } from "react";
import "../assets/css/galeria.css";
import MyContext from "../MyContext";
import Heart from "./Heart";

export default function Galeria() {
  const { fotos, setFotos } = useContext(MyContext);

  const setLiked = (id) => {
    const fotoIndex = fotos.findIndex((foto) => foto.id === id);
    fotos[fotoIndex].liked = !fotos[fotoIndex].liked;
    setFotos([...fotos]);
  };
  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto) => (
        <div
          onClick={() => setLiked(foto.id)}
          className="foto"
          style={{ backgroundImage: `url(${foto.src})` }}
          key={foto.id}
        >
          <Heart filled={foto.liked} />
          <p>{foto.descrip}</p>
        </div>
      ))}
    </div>
  );
}
