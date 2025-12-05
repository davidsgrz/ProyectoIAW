import { Container } from "react-bootstrap";
import type { ReactNode } from "react"; // Importamos el tipo ReactNode para poder recibir componentes hijos

// Definición de las propiedades (Props) que acepta el componente
interface BackgroundTextProps {
  text: string;                  // Título principal
  breadcrumbs?: string;          // Ruta de navegación opcional (ej: "Inicio > Contacto")
  color?: "light" | "dark";      // Tema de color del texto
  alignment?: "start" | "center" | "end"; // Alineación horizontal del texto
  imageUrl?: string;             // URL para imagen de fondo
  videoUrl?: string;             // URL para video de fondo (tiene prioridad sobre la imagen)
  isHero?: boolean;              // Modo "banner": texto más grande y contenedor ancho
  children?: ReactNode;          // Permite insertar contenido extra (botones, descripciones) dentro del header
}

function Header({ 
  text, 
  breadcrumbs, 
  color = "dark", 
  alignment = "center", 
  imageUrl, 
  videoUrl, 
  children 
}: BackgroundTextProps) {
  
  // Determinamos si existe una URL de video válida para mostrar
  const hasVideo = Boolean(videoUrl && videoUrl.trim() !== "");
  
  return (
    // Etiqueta semántica header. 
    // Si NO hay video, aplicamos la imagen de fondo via estilos en línea.
    <header
      className={`d-flex flex-column justify-content-${alignment} text-${color} header-bg position-relative`}
      style={!hasVideo ? { backgroundImage: `url(${imageUrl})` } : {}}
    >
      {/* Si hay video, lo renderizamos como fondo absoluto detrás del contenido */}
      {hasVideo && (
        <video
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Contenedor principal para alinear el contenido (texto/hijos) */}
      <Container className={`d-flex flex-column h-100 justify-content-center align-items-${alignment} pb-4`}>
         <div>
            
            {/* Renderizado condicional de las "migas de pan" */}
            {breadcrumbs && (
              <span className={`small ${color === 'light' ? 'text-white' : 'text-muted'} d-block mb-2`}>
                {breadcrumbs}
              </span>
            )}

            {/* Título: Usa clase 'display-4' (grande) si es modo Hero, o margen 0 si es normal */}
            <h1 className={"display-4 fw-bold mb-3"}>
              {text}
            </h1>

            {/* Slot para renderizar cualquier elemento hijo pasado al componente (ej: Botón "Crea tu perfil") */}
            {children}
         </div>
      </Container>
    </header>
  );
};

export default Header;