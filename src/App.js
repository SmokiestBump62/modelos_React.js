import "./App.css"
import Testimonios from "./componentes/testimonios";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1>¿Quienes son nuestras modelos?</h1>
      <Testimonios
      nombre="Natalia Yount"
      pais="España"
      cargo="Modelo linea playa"
      img="Modelo"
      testimonio="Hola soy Natalia Yount tengo 20 años y me especializo en modelado en bikiny en zonas costeras,
      Mis pasatiempos son estudiar medicina y pasar tiempo con mi madre y padre, juego videojuegos y me encantan las fiestas donde se aprenden cosas útiles."
      />
      
      <Testimonios
      nombre="Zessna Valenkova"
      pais="Rusia"
      cargo="Modelo linea noche"
      img="Modelo 2"
      testimonio="Hola soy Zessna Valenkova tengo 26 años y me especializo en lineas nocturnas para explotar su creatividad, mis pasatiempos son estudiar economia, jugar en mi PC y dirigir mi propia linea de productos para mujer, soy consultora para proyectos de equidad de genero y la realización de una curva salarial con equidad de genero."
      />

      <Testimonios
      nombre="Lu Xiang"
      pais="República de China"
      cargo="Modelo Ropa Elegante"
      img="Modelo China"
      testimonio="Hola soy Lu Xiang tengo 20 años y me especializo en ropa elegante para no desentonar en sus citas de negocios, mis pasatiempos son estudiar Data Label, llevar en mi PC cursos de E-Learning y dirigir mi propia linea de colonias para mujer."
      />

      <Testimonios
      nombre="Diana Blanco y Lucia Nández"
      pais="México y Colombia"
      cargo="Modelos con discapacidad"
      img="Modelo Discapacidad"
      testimonio="Hola nuestros nombres son Diana Blanco y Lucia Nández somos especialistas en promoción de la inclusión y actualmente tenemos una linea de ropa, somos amigas desde hace años y nos gusta viajar y el turismo ecólogico."
      />
      <b><p>Derechos Reservados &copy; 2022</p></b>
      </div>
    </div>
  );
}

export default App;
