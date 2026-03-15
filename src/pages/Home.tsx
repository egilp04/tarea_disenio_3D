import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import { Button } from "../components/ui/button"
import { TooltipProvider } from "../components/ui/tooltip"
import { Tooltip, TooltipContent } from "../components/ui/tooltip"
import { TooltipTrigger } from "../components/ui/tooltip"
import CanvasComponent from "@/components/Canvas"
import { Spinner } from "../components/ui/spinner"

const Home = () => {
  const [aparecer, setAparecer] = useState(false)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const timerCargando = setTimeout(() => {
      setCargando(false)
    }, 300)
    const timerAparecer = setTimeout(() => {
      setAparecer(true)
    }, 1200)
    return () => {
      clearTimeout(timerCargando)
      clearTimeout(timerAparecer)
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div
        className={`absolute inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
          cargando ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <Spinner className="text-[#3b82f6]" />
      </div>

      <div className="absolute inset-0 z-0">
        <CanvasComponent />
      </div>
      <div
        className={`pointer-events-none absolute inset-0 z-10 bg-black/60 transition-opacity duration-500 ${
          aparecer ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col">
        <Navbar></Navbar>
        <main
          className={`flex flex-1 translate-y-0 flex-col items-center justify-center text-blue-50 transition-all duration-1300 ${
            aparecer ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-6 text-center text-6xl">
            Descubre el{" "}
            <span className="font-extrabold text-[#3b82f6]">
              IES Albarregas
            </span>
          </h2>
          <h3>No solo busques un título, busca un legado</h3>
          <p className="mb-10 w-200 text-center text-lg font-semibold text-blue-50">
            Hay lugares donde el tiempo no corre, sino que se acumula. <br />
            Cada mañana, al entrar al centro, el Acueducto de los Milagros nos
            saluda, recordándonos que el trabajo bien hecho puede durar una
            eternidad. Somos los herederos de la Augusta Emerita, jóvenes que
            hoy aprenden bajo la sombra de la ingeniería más ambiciosa del
            Imperio. Sé parte de la historia que aún se está escribiendo.
          </p>

          <div className="pointer-events-auto flex gap-4">
            <TooltipProvider delay={200}>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    className={"animate-pulse-soft"}
                    size={"lg"}
                    onClick={() =>
                      window.open(
                        "mailto:eveliagilparedes@gmail.com?subject=Consulta"
                      )
                    }
                  >
                    Contactar
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>¡Contáctame en cualquier momento 😊!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delay={200}>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    onClick={() =>
                      window.open(
                        "https://sites.google.com/educarex.es/ofertaeducativaiesalbarregas/inicio",
                        "_blank"
                      )
                    }
                  >
                    Saber más
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Hazme clic para obtener más información</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
