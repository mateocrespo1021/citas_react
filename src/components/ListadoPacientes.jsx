import Pacientes from "./Pacientes";

const ListadoPacientes = ({ pacientes, setPaciente,eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5  ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          <div className="overflow-y-scroll md:h-screen">
            {pacientes.map((paciente) => (
              /*Un map es la mejor forma de hacer una lista ya que me retorna algo,siempre un listado debe tener un key unico*/
              <Pacientes
                paciente={paciente}
                key={paciente.id}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              ></Pacientes>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center ">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
