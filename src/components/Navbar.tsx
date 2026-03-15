import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <nav className="pointer-events-auto flex flex-row justify-between border-b border-b-blue-950 bg-gray-950 px-10 py-6">
      <div className="flex w-full flex-1 items-center">
        <h1 className="text-shimmer text-2xl">IES Albarregas</h1>
      </div>
      <div className="flex flex-1 flex-row items-center justify-end">
        <NavigationMenu>
          <NavigationMenuList className={"flex gap-4"}>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Proyectos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-96">
                  <ListItem
                    href="https://portfolio-eve-one.vercel.app/"
                    title="Proyectos"
                  >
                    Todos los proyectos
                  </ListItem>
                  <ListItem
                    href="https://tfg-cuidados.vercel.app/"
                    title="TFG de Evelia"
                  >
                    cuidaDos
                  </ListItem>
                  <ListItem href="https://list-o.vercel.app/" title="listO">
                    listO - Bitácora de entretenimiento
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={
                  <Link to="mailto:eveliagilparedes@gmail.com?subject=Consulta">
                    Contacto
                  </Link>
                }
              />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link to={href} target="_blank">
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="text-gray-800-foreground line-clamp-2">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  )
}

export default Navbar
