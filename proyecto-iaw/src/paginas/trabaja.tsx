import Header from '../componentes/header';
import Footer from '../componentes/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './trabaja.css';
import NavbarSec from '../componentes/NavbarSec';

function Trabaja() {
  return (
    <div className="page-wrapper">
      <div className="content-box bg-white shadow-sm mx-auto d-flex flex-column">
        {/* seccion del header */}
        <NavbarSec />
        <div className="w-100">
          <Header
            text="Somos más de 100.000 talentos compartiendo un proyecto común"
            alignment="center"
            color="light"
            videoUrl="/assets/Trabaja.mp4"
            EsBanner={true}
          >
            <p className="fs-5 text-white mb-4 mx-auto" style={{ maxWidth: '700px' }}>
              Cada día surgen nuevas oportunidades. Crea tu perfil y te ayudaremos a encontrar tu puesto.
            </p>
            <button className="btn btn-mercadona-green btn-lg fw-bold rounded-1 px-4 text-white">
              CREA TU PERFIL <i className="bi bi-person-circle ms-2"></i>
            </button>
          </Header>
        </div>

        <div className="container py-5">

          {/* Seccion nuestras ofertas */}
          <div className="mb-5 text-center">
            <h2 className="section-title mb-4">Nuestras ofertas</h2>
            <div className="row g-4">
              <div className="col-md-3">
                <div className="offer-card rounded overflow-hidden shadow-sm">
                  <img src="/assets/thumb-tienda.jpg" alt="Tiendas" className="img-fluid" />
                  <div className="p-3 bg-white">
                    <h5 className="text-secondary mb-0">Tiendas</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="offer-card rounded overflow-hidden shadow-sm">
                  <img src="/assets/thumb-logistico.jpg" alt="Logística" className="img-fluid" />
                  <div className="p-3 bg-white">
                    <h5 className="text-secondary mb-0">Bloques Logísticos</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="offer-card rounded overflow-hidden shadow-sm">
                  <img src="/assets/thumb-online.jpg" alt="Online" className="img-fluid" />
                  <div className="p-3 bg-white">
                    <h5 className="text-secondary mb-0">Mercadona Online</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="offer-card rounded overflow-hidden shadow-sm">
                  <img src="/assets/thumb-oficina.jpg" alt="Oficinas" className="img-fluid" />
                  <div className="p-3 bg-white">
                    <h5 className="text-secondary mb-0">Oficinas</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* seccion de valores */}
          <div className="mb-5 py-4 text-center">
            <h2 className="section-title mb-5">¿Sabes qué tenemos en común en Mercadona?</h2>
            <div className="row g-4 justify-content-center">
              {['Humildad', 'Esfuerzo', 'Confianza'].map((valor, index) => (
                <div className="col-md-4" key={index}>
                  {/* Aseguramos flex column aquí por si acaso el CSS fallara, aunque ya lo tienes en el archivo CSS */}
                  <div className="value-card shadow h-100 bg-white rounded overflow-hidden d-flex flex-column">
                    <div className="p-4">
                      <h3 className="text-mercadona fw-bold mb-3">{valor}</h3>
                      <p className="text-muted small">
                        {index === 0 && "¡Siempre podemos aprender algo nuevo! Escuchamos a los demás y reconocemos dónde podemos mejorar."}
                        {index === 1 && "Damos siempre lo mejor de nosotros, afrontamos nuestro día a día con ganas y pasión."}
                        {index === 2 && "Somos personas en las que se puede confiar, transparentes y coherentes, lo que decimos coincide con lo que hacemos."}
                      </p>
                    </div>
                    {/* AÑADIDO: 'd-block' para quitar el borde inferior y 'mb-0' por seguridad */}
                    <img
                      src={`/assets/valor_${valor.toLowerCase()}.png`}
                      alt={valor}
                      className="img-fluid w-100 mt-auto d-block mb-0"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* seccion que te ofrecemos */}
          <div className="mb-5 py-4 text-center">
            <h2 className="section-title mb-5">Qué te ofrecemos</h2>
            <div className="row text-center g-4">
              <div className="col-md-4 px-4">
                <h4 className="text-mercadona fw-bold">Estabilidad económica</h4>
                <p className="text-muted mt-3">En Mercadona te necesitamos, nos gustaría contar contigo a largo plazo y proporcionarte estabilidad.</p>
              </div>
              <div className="col-md-4 px-4 border-start-md">
                <h4 className="text-mercadona fw-bold">Salario competitivo</h4>
                <p className="text-muted mt-3">Reconocemos la dedicación de nuestros trabajadores con retribuciones competitivas y buenas condiciones laborales.</p>
              </div>
              <div className="col-md-4 px-4 border-start-md">
                <h4 className="text-mercadona fw-bold">Progresión laboral</h4>
                <p className="text-muted mt-3">Aquí tienes la oportunidad de aprender y crecer profesionalmente. Creemos en tu futuro.</p>
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-mercadona fw-bold text-decoration-none small">Ver más <i className="bi bi-chevron-right"></i></a>
            </div>
          </div>

          {/* seccion unirse al equipo */}
          <div className="mb-5 py-5 bg-light rounded-3 text-center px-3">
            <h2 className="section-title mb-5">Entra en nuestro equipo</h2>
            <div className="row g-4 align-items-start justify-content-center process-steps">
              <div className="col-6 col-md-3">
                <i className="bi bi-person-plus text-mercadona display-4"></i>
                <p className="mt-3 small fw-bold text-secondary">Crea tu perfil con toda la información</p>
              </div>
              <div className="col-6 col-md-3 position-relative">
                <div className="d-none d-md-block arrow-connector">→</div>
                <i className="bi bi-search text-mercadona display-4"></i>
                <p className="mt-3 small fw-bold text-secondary">Buscamos un empleo acorde a ti</p>
              </div>
              <div className="col-6 col-md-3 position-relative">
                <div className="d-none d-md-block arrow-connector">→</div>
                <i className="bi bi-telephone text-mercadona display-4"></i>
                <p className="mt-3 small fw-bold text-secondary">Nos ponemos en contacto contigo</p>
              </div>
              <div className="col-6 col-md-3 position-relative">
                <div className="d-none d-md-block arrow-connector">→</div>
                <i className="bi bi-heart text-mercadona display-4"></i>
                <p className="mt-3 small fw-bold text-secondary">Si encajas, entras en nuestro equipo</p>
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-mercadona fw-bold text-decoration-none small">Ver más <i className="bi bi-chevron-right"></i></a>
            </div>
          </div>

          {/* SECCIÓN VIDEO (Sin portada, directo el reproductor) */}
          <div className="mb-5 text-center">
            <h2 className="section-title mb-4">Conoce nuestro día a día</h2>

            <div
              className="video-container position-relative w-100 rounded overflow-hidden shadow bg-dark"
              style={{ height: '400px' }}
            >
              <video
                className="w-100 h-100 object-fit-cover"
                src="/assets/video_thumbnail.mp4"
                controls
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>

            <div className="mt-3 text-end">
              <a href="#" className="text-mercadona fw-bold text-decoration-none small">
                Ver todos los videos <i className="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* seccion noticias */}
          <div className="mb-5 text-center">
            <h2 className="section-title mb-4">Nuestras últimas noticias</h2>
            <div className="row g-4 text-start">
              {[1, 2, 3].map((item) => (
                <div className="col-md-4" key={item}>
                  <div className="news-card">
                    <div className="position-relative overflow-hidden rounded mb-3">
                      <img src={`/assets/noticia_${item}.jpg`} className="img-fluid w-100" alt="Noticia" />
                      <div className="position-absolute bottom-0 start-0 p-3 w-100 bg-gradient-to-t">
                        {/* Overlay verde opcional si quieres */}
                      </div>
                    </div>
                    <p className="small fw-bold text-dark">
                      {item === 1 && "Mercadona, una apuesta firme por las personas y la formación"}
                      {item === 2 && "Mercadona, salarios por encima de la media del sector"}
                      {item === 3 && "Mercadona, destacada por ser la mejor empresa para trabajar de la distribución"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8. CTA FINAL */}
          <div className="text-center py-5 bg-light rounded">
            <h3 className="text-secondary fw-normal mb-4">Regístrate para no perder ninguna oportunidad</h3>
            <button className="btn btn-mercadona-green btn-lg fw-bold rounded-1 px-5 text-white">
              CREA TU PERFIL <i className="bi bi-person-circle ms-2"></i>
            </button>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trabaja;