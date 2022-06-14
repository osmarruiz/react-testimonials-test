import './App.css';
import Testimonio from './componentes/testimonio';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos</h1>
     <Testimonio
     nombre='Luis rodriguez'
     pais='bolonia'
     imagen='luis'
     cargo='ingeniero de software'
     alt='luis'
     empresa='spotify'
     testimonio='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias corporis eius quos iure asperiores, voluptate ea magnam facere sed at facilis fugit ullam, et quibusdam illum ' />
      <Testimonio
     nombre='Raul Marquez'
     pais='espana'
     imagen='raul'
     cargo='ingeniero de software'
     empresa='duolingo'
     alt='raul'
     testimonio='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias corporis eius quos iure asperiores, voluptate ea magnam facere sed at facilis fugit ullam, et quibusdam illum reprehenderit? Totam, quam fugit?  ' />
     
     <Testimonio
     nombre='pedro fernandez'
     pais='amsterdam'
     imagen='pedro'
     cargo='ingeniero de software'
     alt='pedro'
     empresa='nasa'
     testimonio='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias corporis eius quos iure asperiores, voluptate ea magnam facere sed at facilis fugit ullam, et quibusdam illum reprehenderit? Totam, quam fugit? ' />
      </div>
     
    </div>
  );
}

export default App;
