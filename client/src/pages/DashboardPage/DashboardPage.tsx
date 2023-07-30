import { useEffect } from "react";
import useNavbarConfig from "../../hooks/useNavbarConfig";
import SideNav from "./components/SideNav";
import AnalyticsCollage from "./components/AnalyticsCollage";

export default function DashboardPage() {
  const navbarConfig = useNavbarConfig();

  useEffect(() => {
    navbarConfig.hide();

    return () => {
      navbarConfig.show();
    };
  }, []);

  return (
    <article className="flex min-h-screen">
      <SideNav className="basis-[20%]" />
      <AnalyticsCollage />
    </article>
  );
}
