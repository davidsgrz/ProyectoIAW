// Props que recibe el componente:
// - text: el texto que se mostrará encima de la imagen
// - alignment: alineación (start, center, end) con Bootstrap
// - imageUrl: ruta de la imagen de fondo
interface BackgroundTextProps {
  text: string;
  color?: "light" | "dark";
  alignment?: "start" | "center" | "end";
  imageUrl?: string;
  videoUrl?: string;
}

// Componente Header: muestra una imagen de fondo con un texto encima
function Header({ text, color = "dark", alignment = "center", imageUrl, videoUrl }: BackgroundTextProps) {
  const hasVideo = Boolean(videoUrl && videoUrl.trim() !== "");

  return (
    <header
      className={`d-flex align-items-center justify-content-${alignment} text-${color} header-bg position-relative`}
      style={!hasVideo ? { backgroundImage: `url(${imageUrl})` } : {}}
    >
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

   
      <div
        // Caja que contiene el texto, con tamaño y alineación
        className={`text-${alignment} w-50 p-3 bg-opacity-100 rounded`}
      >
        <h2 className="m-0">{text}</h2>
      </div>
    </header>
  );
};

export default Header;
