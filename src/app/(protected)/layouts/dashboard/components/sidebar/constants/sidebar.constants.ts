// Icons
import {
  ChartCandlestick,
  ChartLine,
  Home,
  Image,
  Settings2,
  Settings,
} from "lucide-react";

const ITEMS = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Obras",
      url: "/obras",
      icon: Image,
    },
    {
      title: "Parametros obras",
      url: "#",
      icon: Settings2,
      isActive: false,
      items: [
        {
          title: "Acabados",
          url: "/obras/acabados",
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
      title: "Administración",
      url: "#",
      icon: ChartLine,
      items: [
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
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
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
