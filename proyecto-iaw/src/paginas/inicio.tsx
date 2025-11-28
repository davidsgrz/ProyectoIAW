import "./inicio.css";

export default function Inicio() {
  return (
    <div className="inicio">

      {/* HERO */}
      <section className="hero">
        <div className="hero__left">
          <h1>Empieza tu compra<br />en Mercadona</h1>

          <p className="hero__desc">
            Introduce tu código postal y dependiendo de tu ciudad accederás
            a la nueva compra online o a la web clásica.
          </p>

          <div className="hero__form">
            <input type="text" placeholder="Código postal" />
            <button>ENTRAR</button>
          </div>
        </div>

        <img
          className="hero__img"
          src="/img/hero.jpg"
          alt="Productos Mercadona"
        />
      </section>

      {/* Bloque Compra online */}
      <section className="info">
        <h2>Compra online</h2>
        <p>
          Realiza tu pedido con la misma calidad y frescura de siempre.
        </p>

        <img
          src="/img/compra-online.jpg"
          alt="Compra online"
          className="info__img"
        />
      </section>

      {/* Bloque Nueva tienda online */}
      <section className="info">
        <h2>Nueva tienda online en algunas zonas</h2>
        <p>
          Por el momento, la nueva tienda solo está disponible en algunas
          ciudades. Muy pronto llegará a más zonas.
        </p>

        <img
          src="/img/nueva-tienda.jpg"
          alt="Nueva tienda"
          className="info__img"
        />

        <a className="info__link">Avísame</a>
      </section>

    </div>
  );
}
