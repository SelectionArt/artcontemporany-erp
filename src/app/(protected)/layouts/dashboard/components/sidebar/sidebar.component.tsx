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

const Sidebar = ({ pricingSections }: SidebarProps) => {
  const items = ITEMS.navMain.map((item) => {
    if (item.title === "Tarifas") {
      return {
        ...item,
        items: [
          ...(item.items ?? []),
          ...pricingSections.map((section) => ({
            title: section.name,
            url: `/tarifas/${section.slug}`,
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
