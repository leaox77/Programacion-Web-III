import Filtrar from "./components/Filtrar";
import ListaCompleta from "./components/ListaCompleta";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Filtrar/>} />
        <Route path="/lista" element={<ListaCompleta/>} />
         <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App;