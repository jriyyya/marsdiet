import { useEffect } from "react";
import useNavbarConfig from "../../hooks/useNavbarConfig";
import SideNav from "./components/SideNav";
import AnalyticsCollage from "./components/AnalyticsCollage";
import api from "../../api";
import { useAuth0 } from "@auth0/auth0-react";

export default function DashboardPage() {
  const navbarConfig = useNavbarConfig();
  const { user } = useAuth0();

  useEffect(() => {
    navbarConfig.hide();

    return () => {
      navbarConfig.show();
    };
  }, []);

  useEffect(() => {
    console.log("user -> ", user);
    api.user.new(
      user?.email || "e@ma.il",
      user?.picture ||
        "https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg"
    );

    api.user.registration
      .status(user?.email || "asd@sdasd.cc")
      .then((status) => {
        console.log(status);
      });
  }, []);

  return (
    <article className="flex min-h-screen">
      <SideNav className="basis-[20%]" />
      <AnalyticsCollage />
    </article>
  );
}
