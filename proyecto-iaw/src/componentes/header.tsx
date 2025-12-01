// Props que recibe el componente:
// - text: el texto que se mostrará encima de la imagen
// - alignment: alineación (start, center, end) con Bootstrap
// - imageUrl: ruta de la imagen de fondo
interface BackgroundTextProps {
  text: string;
  color?: "light" | "dark";
  alignment?: "start" | "center" | "end";
  imageUrl: string;
}

// Componente Header: muestra una imagen de fondo con un texto encima
function Header({ text, color = "dark", alignment = "center", imageUrl }: BackgroundTextProps) {
  return (
    <header
      // Contenedor principal con imagen de fondo y alineación del texto
      className={`d-flex align-items-center justify-content-${alignment} text-${color} header-bg`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
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
