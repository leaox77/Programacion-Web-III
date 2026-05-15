import Filtrar from "./components/Filtrar";
import ListaCompleta from "./components/ListaCompleta";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import FormLogin from "./components/FormLogin";
import Detalle from "./components/Detalle";
import Post from "./components/Post";
import RutaProtegida from "./components/RutaProtegida";
import NoAutorizado from "./components/401";
import { Routes, Route } from "react-router-dom";
import ThemeProvider from "./components/ThemeContext";
import Card from "./components/Card";

function App() {
  return(
    <ThemeProvider>
      <Navbar />
      <Card />
      <Routes>
        <Route path="/" element={<Filtrar/>} />
        <Route path="/formulario" element={<FormLogin/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/e" element={<NoAutorizado/>}/>
        <Route path="/producto/:id" element={<Detalle/>}/>
        <Route path="/blog/:categoria/:slug" element={<Post/>}/>
        <Route
          path="/lista"
          element={
            <RutaProtegida>
              <ListaCompleta/>
            </RutaProtegida>
          }
        />

      </Routes>
    </ThemeProvider>
  )
}

export default App;