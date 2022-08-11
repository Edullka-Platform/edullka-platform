import { Navbar } from "../../components/Navbar/Navbar";
import Error from "../../assets/img/Error404.png";

const Error404 = () => {
  return (
<>
<Navbar/>
  <main className="h-screen container mx-auto ">
    <div className="md:flex inline-block pt-24 mx-auto gap-20 
        ">
      <div className="flex-initial mx-auto min-w-fit pl-6  ">
        <img className="rounded-3xl border-2" src={Error} alt="Error_404" width={679} height={383}   />
      </div>

      <div className="flex-1 min-w-fit w-[300px] pt-16 ">
        <p className="text-7xl">Ooops...</p>
        <p className="text-5xl">página no encontrada</p>
        <br/>
        <p className="text-xl text-gray-500">la página que busca no existe o se
                                    produjo otro error,<br/> vuelva a la página de inicio</p>
        <div className="flex pt-7">
          <button className="flex justify-center mx-autobg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <a href="/">Inicio</a>
          </button>
        </div>
      </div>
    </div>
  </main>

</>

  )
}

export default Error404