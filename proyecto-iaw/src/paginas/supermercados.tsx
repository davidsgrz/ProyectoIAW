import Header from "../componentes/header";

// la estoy usando de ejemplo, se puede borrar en cualquier momento

function Supermercados() {
  return (
    // clase contenedora de bootstrap para que no ocupe todo el ancho
    <div className="container mt-4">
      {/* Encabezado con imagen del public */}
      <Header
        text="Bienvenido a la página de Supermercado"
        alignment="start"
        color="light"
        imageUrl="./assets/Supermercados.jpg"
      />

      {/* Contenido debajo del header */}
     <div className="card" style={{width: "18rem", marginTop: "20px"}}>
      <div className="card-body">
      <h5 className="card-title">Mercadona cuenta con 1.603 supermercados. Encuentra tu Mercadona más cercano y su horario</h5>
      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
      
       </div>
    </div>

    </div>
  );
};

      

export default Supermercados;
