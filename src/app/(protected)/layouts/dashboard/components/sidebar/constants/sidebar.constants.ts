// Icons
import {
  ChartCandlestick,
  ChartLine,
  Frame,
  Home,
  Images,
  ImagePlus,
  Settings,
  Settings2,
} from "lucide-react";

const ITEMS = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Gestión obras",
      url: "/obras",
      icon: ImagePlus,
    },
    {
      title: "Galería obras",
      url: "/galeria",
      icon: Images,
    },
    {
      title: "Parámetros obras",
      url: "#",
      icon: Settings2,
      isActive: false,
      items: [
        {
          title: "Técnicas",
          url: "/obras/tecnicas",
        },
        {
          title: "Artistas",
          url: "/obras/artistas",
        },
        {
          title: "Colores",
          url: "/obras/colores",
        },
        {
          title: "Estilos",
          url: "/obras/estilos",
        },
        {
          title: "Formatos",
          url: "/obras/formatos",
        },
        {
          title: "Soportes",
          url: "/obras/soportes",
        },
      ],
    },
    {
      title: "Gestión molduras",
      url: "/molduras",
      icon: Frame,
    },
    {
      title: "Parámetros molduras",
      url: "#",
      icon: Settings2,
      isActive: false,
      items: [
        {
          title: "Materiales",
          url: "/molduras/materiales",
        },
        {
          title: "Fabricantes",
          url: "/molduras/fabricantes",
        },
      ],
    },
    {
      title: "Administración",
      url: "#",
      icon: ChartLine,
      items: [
        {
          title: "Clientes",
          url: "/administracion/clientes",
        },
        {
          title: "Presupuestos",
          url: "/administracion/presupuestos",
        },
        {
          title: "Hojas de confirmación",
          url: "/administracion/hojas-de-confirmacion",
        },
        {
          title: "Facturas",
          url: "/administracion/facturas",
        },
      ],
    },
    {
      title: "Tarifas",
      url: "#",
      icon: ChartCandlestick,
      items: [
        {
          title: "Tipos de tarifa",
          url: "/tarifas",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
};

export { ITEMS };
