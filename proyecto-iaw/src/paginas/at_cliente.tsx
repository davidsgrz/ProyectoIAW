import Header from "../componentes/header";

// la estoy usando de ejemplo, se puede borrar en cualquier momento

function At_Cliente() {
  return (
    // clase contenedora de bootstrap para que no ocupe todo el ancho
    <div className="container mt-4">
      {/* Encabezado con imagen del public */}
      <Header
        text="Atención al Cliente"
        alignment="start"
        color="light"
        imageUrl="./assets/At_cliente.jpg"
      />
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
      {/* Contenido debajo del header */}
      <div className="card-group">
        <div className="card" style={{ width: "18rem", marginTop: "20px" }}>
          <img src="./assets/atencion.png" className="card-img-top" alt="Atención telefónica" />
          <div className="card-body">
            <p className="card-text">Te atendemos de lunes a domingo de 7 a 22:30h, 1h menos en Canarias.</p>
            <p className="card-text">Teléfono: 900 500 103</p>
            <p className="card-text">(gratuito)</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "20px" }}>
          <img src="./assets/contacta.png" className="card-img-top" alt="Atención por Whatsapp" />
          <div className="card-body">
            <p className="card-text">¡Hola soy Carol, tu asistente virtual de WhatsApp!</p>
            <p>¿En qué puedo ayudarte?</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "20px" }}>
          <img src="./assets/sugerencia.png" className="card-img-top" alt="Formulario de contacto" />
          <div className="card-body">
            <p className="card-text">Haznos llegar tus comentarios a través de este formulario o escríbenos a nuestro correo.</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "20px" }}>
          <img src="./assets/redes.png" className="card-img-top" alt="Contacta por Red social" />
          <div className="card-body">
            <p className="card-text">También puedes contactar con nosotros desde nuestro Facebook, X, YouTube, Instagram y LinkedIn.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default At_Cliente;
