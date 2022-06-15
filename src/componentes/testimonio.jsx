
import style from '../hojas-de-estilo/testimonio.css';
function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt={`foto de ${props.alt}`} />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> de <strong>{props.pais}</strong></p>
        <p className="cargo-testimonio">{props.cargo}  {props.empresa}   </p>
        <p className="texto-testimonio"> "{props.testimonio}"</p>
      </div>
    </div>
  );

}
export default Testimonio;
