import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useEffect, useState } from "react";
import MyContext from "./MyContext";

export default function App() {
  const [fotos, setFotos] = useState([]);
  const endpoint = "/fotos.json";
 
  async function getFotos(){
    const res = await fetch(endpoint);
    let {photos} = await res.json();
    const newFotos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      descrip: photo.alt,
      liked: false,
    }));
    console.log(photos,newFotos);
    setFotos(newFotos);
  };
  
  useEffect(() => {
    getFotos();
  }, []);

  return (
    <div className="App">
      <MyContext.Provider value={{fotos, setFotos}}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
