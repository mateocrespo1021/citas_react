import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

//JSX: Es un lenguaje de templete que muestra el html
//pero tiene todas las funciones de javascript
//Reglas
//1-Todas las etiquetas deben tener un cierre
//2-Todos los componentes deben tener un return
//3-Solo puedo retornar un elemento en el nivel más alto
//Puedes usar un fragment <> </> ,asi evitar crear tantos div
//Solo puede ir expresiones , no puede ir un if,swich o funcion

//¿Qué son los props o propiedades
//Es una forma de evitar duplicar el codigo y reutilizar
//esas variables,state,o estado y funciones en otros componentes es por
//medio de props, se pásan desde el padre hacia el hijo
//puedes pasarle de hijo al padre peros olo mediante una funcion

//Prop Children
//Es una palabra reservada que hace referencia a todo lo que le envie por props al
//componente,y puedes poner mucho codigo html

//Qué son los react hooks
// son funciones que permiten enganchar nuestros componentes funcionales
//a características propias de un componente de clase.
//Los hooks se dividen en básicos y adicionales
//tambien es posible crear tús propies hooks

//Reglas de Hooks
//Los hooks se colocan en la parte superior de tus componentes de React
//No se deben colocar dentro de condicionales,tampoco después de
//un return

//Qué es el state o estado en react
//Es el estado de nuestra aplicación
//Algunas veces el state pertenece a un componente
//en especifico o otras deseas compartirlo a lo largo
//de diferente componentes
//Cada que tu state cambia,tu aplicación de React va a renderizar y
//actualizar cambios.Para modificar el state,se utiliza la función que extraemos
//cuando declaramos el state

//Sobre los eventos
//En react
//Los eventos son camelCase,es decir en lugar de onchange se utiliza
//onChange

//UseEffect
//Siempre es un callback, que se ejecuta cuando un state cambia o
//cuando el componente está lista.
//Al ejecutarse automaticamente cuando el componente está listo,es un excelente lugar
//para colocar código para consular una API o LocalStorage,debido
//a que le podemos pasar una dependecia y estar escuchando por los cambios
//que secedan en una variable,puede actualizar el componente cuando ese cambio suceda

function App() {
  {
    /*Es el componente principal de nuestra aplicación
Los componentes se dividiran en dos partes ,antes del return codigo javascrit
y lo que está dentro del return
*/
  }
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS=()=>{
      const pacientesLS=JSON.parse(localStorage.getItem("pacientes")) ?? [] ;
      setPacientes(pacientesLS);
    }
    obtenerLS()
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizado = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes([...pacientesActualizado]);
  };
  return (
    <div className="App container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        ></Formulario>
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        ></ListadoPacientes>
      </div>
    </div>
  );
}

export default App;
