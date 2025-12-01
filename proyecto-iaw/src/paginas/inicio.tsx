import Header from "../componentes/header";

// la estoy usando de ejemplo, se puede borrar en cualquier momento

function Inicio() {
  return (
    // clase contenedora de bootstrap para que no ocupe todo el ancho
    <div className="mt-4">
      {/* Encabezado con imagen del public */}
      <Header
        text="Bienvenido a la página de inicio que se encuentra en inicio.tsx"
        alignment="end"
        imageUrl="./assets/banner_mercadona_inicio.jpg"
      />

      {/* Contenido debajo del header */}
      <section className="container my-5 w-50">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="h3 mb-3">Compra online</h3>
            <p className="lead">Recibe tu pedido en casa con la misma calidad y frescura de siempre.</p>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img src="./assets/worker1.jpeg" alt="" className="img-fluid rounded shadow-lg" />
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img src="./assets/worker1.jpeg" alt="" className="img-fluid rounded shadow-lg" />
          </div>
          <div className="col-lg-6">
            <h3 className="h3 mb-3">Compra online</h3>
            <p className="lead">Recibe tu pedido en casa con la misma calidad y frescura de siempre.</p>
          </div>
          
        </div>  
      </section>
    </div>
  );
};

export default Inicio;
