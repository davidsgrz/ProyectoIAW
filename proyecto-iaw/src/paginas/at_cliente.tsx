import Header from "../componentes/header";

// la estoy usando de ejemplo, se puede borrar en cualquier momento

function At_Cliente() {
  return (
    // clase contenedora de bootstrap para que no ocupe todo el ancho
    <div className="container mt-4">
      {/* Encabezado con imagen del public */}
      <Header
        text="Bienvenido a la página de inicio que se encuentra en inicio.tsx"
        alignment="end"
        imageUrl="./assets/banner_mercadona_inicio.jpg"
      />

      {/* Contenido debajo del header */}
      <div>
        <h3>Página de Inicio</h3>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus est perferendis earum vel nesciunt nisi sed officia numquam neque a, accusantium quod iste laborum odit voluptas fuga ducimus. Similique, sapiente.
        </p>
      </div>

    </div>
  );
};

export default At_Cliente;
