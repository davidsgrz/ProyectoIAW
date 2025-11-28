import "./footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer__top">
        <div className="footer__col">
          <h4>Cliente</h4>
          <a>Supermercados</a>
          <a>Consejos</a>
          <a>Factura cliente</a>
        </div>

        <div className="footer__col">
          <h4>Trabajador</h4>
          <a>Trabaja con nosotros</a>
        </div>

        <div className="footer__col">
          <h4>Proveedor</h4>
          <a>Factura-Me</a>
          <a>Portal Trinidad</a>
        </div>

        <div className="footer__col">
          <h4>Sociedad</h4>
          <a>Actualidad</a>
          <a>Sala de prensa</a>
          <a>Conoce Mercadona</a>
          <a>Mercadona en Portugal</a>
          <a>Cuidemos el Planeta</a>
        </div>

        <div className="footer__contact">
          <div className="footer__phone">
            <span className="image">
                <img src="/assets/call-center.png" className="img-fluid" alt="Responsive image" />
            </span> <span></span>
            <span>800 500 220</span>
          </div>

          <div className="footer__social">
            <i className="bi bi-envelope"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>
      </div>

      {/* Enlaces legales */}
      <div className="footer__legal">
        <a>Accesibilidad</a>
        <a>Política de privacidad</a>
        <a>Política de cookies</a>
        <a>Términos y condiciones</a>
      </div>

      {/* Derechos */}
      <div className="footer__bottom">
        © Mercadona S.A. A46103834. Todos los derechos reservados.
      </div>

    </footer>
  );
}
