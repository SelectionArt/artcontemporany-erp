// Components
import {
  Sidebar as SidebarComponent,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Header } from "@/app/(protected)/layouts/dashboard/components/sidebar/components/header/header.component";
import { Content } from "@/app/(protected)/layouts/dashboard/components/sidebar/components/content/content.component";
import { Footer } from "@/app/(protected)/layouts/dashboard/components/sidebar/components/footer/footer.component";
// Constants
import { ITEMS } from "@/app/(protected)/layouts/dashboard/components/sidebar/constants/sidebar.constants";

const Sidebar = () => {
  return (
    <SidebarComponent collapsible="icon">
      <Header items={ITEMS.teams} />
      <Content items={ITEMS.navMain} />
      <Footer user={ITEMS.user} />
      <SidebarRail />
    </SidebarComponent>
  );
};

export { Sidebar };
