// Components
import {
  Sidebar as SidebarComponent,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Header } from "./components/header/header.component";
import { Content } from "./components/content/content.component";
// Constants
import { ITEMS } from "./constants/sidebar.constants";
// Types
import type { SidebarProps } from "./types/sidebar.component.types";

const Sidebar = ({ pricings }: SidebarProps) => {
  const items = ITEMS.navMain.map((item) => {
    if (item.title === "Tarifas") {
      return {
        ...item,
        items: [
          ...(item.items ?? []),
          ...pricings.map((pricing) => ({
            title: pricing.name,
            url: `/tarifas/${pricing.id}`,
          })),
        ],
      };
    }
    return item;
  });

  return (
    <SidebarComponent collapsible="icon">
      <Header />
      <Content items={items} />
      <SidebarRail />
    </SidebarComponent>
  );
};

export { Sidebar };
