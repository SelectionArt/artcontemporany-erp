// Components
import {
  Sidebar as SidebarComponent,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Header } from "./components/header/header.component";
import { Content } from "./components/content/content.component";
// Constants
import { ITEMS } from "./constants/sidebar.constants";

const Sidebar = () => {
  return (
    <SidebarComponent collapsible="icon">
      <Header items={ITEMS.teams} />
      <Content items={ITEMS.navMain} />
      <SidebarRail />
    </SidebarComponent>
  );
};

export { Sidebar };
