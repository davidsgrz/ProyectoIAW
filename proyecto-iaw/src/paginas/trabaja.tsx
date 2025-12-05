import Header from "../componentes/header";

// la estoy usando de ejemplo, se puede borrar en cualquier momento

function Trabaja() {
  return (
    // clase contenedora de bootstrap para que no ocupe todo el ancho
    <div className="container mt-4">
      {/* Encabezado con imagen del public */}
      <Header
        text="Somos más de 100.000 talentos compartiendo un proyecto común"
        alignment="end"
        videoUrl="./assets/Trabaja.mp4"
        
      />

      {/* Contenido debajo del header */}
      <div>
        <h3>Nuestras ofertas</h3>
        <p>
            Entra en nuestro portal de empleo y descubre las oportunidades laborales que Mercadona tiene para ti. Únete a un equipo comprometido con la calidad, la innovación y el bienestar de sus empleados.
        </p>
      </div>

    </div>
  );
};

export default Trabaja;
