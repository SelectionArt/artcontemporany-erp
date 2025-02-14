// Icons
import {
  AudioWaveform,
  ChartCandlestick,
  ChartLine,
  Calendar,
  Command,
  GalleryVerticalEnd,
  Home,
  Image,
  Palette,
  Settings2,
  Settings,
} from "lucide-react";

const ITEMS = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Artistas",
      url: "/artistas",
      icon: Palette,
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
      title: "Calendar",
      url: "/calendar",
      icon: Calendar,
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
