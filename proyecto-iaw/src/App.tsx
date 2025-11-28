import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navb from "./componentes/navbar";
import Inicio from "./paginas/inicio";
import Footer from "./componentes/footer";
// import Supermercados from "./paginas/supermercados";
// import Trabaja from "./paginas/trabaja";
// import AtCliente from "./paginas/at_cliente";
// import error404 from "./paginas/error404"; 

function App() {
  return (
    <Router>
      <Navb />
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* <Route path="/supermercados" element={<Supermercados />} />
        <Route path="/trabaja" element={<Trabaja />} />
        <Route path="/at_cliente" element={<AtCliente />} /> */}

{/* si no existe ruta -- lleva a una pag error 404  */}
        {/* <Route path="*" element={<error404 />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App