import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" >Conócenos</NavLink>

      <NavLink to="/supermercados" >Supermercados</NavLink>

      <NavLink to="/trabaja" >Trabaja con nosotros</NavLink>

      <NavLink to="/at_cliente" >Atención al cliente</NavLink>

      <NavLink to="/at_cliente" >Atención al cliente</NavLink>

      <NavLink to="/error404" >Atención al cliente</NavLink>
    </nav>
  );
}
