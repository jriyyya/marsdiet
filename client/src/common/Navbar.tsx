import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import useNavbarConfig from "../hooks/useNavbarConfig";
import { useAuth0 } from "@auth0/auth0-react";
import api from "../api";

const navItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Help",
    to: "/help",
  },
];

export default function Navbar() {
  const config = useNavbarConfig().value;
  const { loginWithPopup, user, isAuthenticated, logout } = useAuth0();
  return (
    <nav
      className={twMerge(
        "flex p-page justify-between py-6",
        config.hidden && "hidden"
      )}
    >
      <div className="flex gap-x-4 items-center">
        <img src="/images/logo.png" alt="logo" className="w-[6%]" />
        <Link to="/" className="text-primary font-extrabold text-4xl">
          MarsDiet
        </Link>
      </div>
      <div className="flex gap-x-12 items-center">
        {navItems.map((item, i) => (
          <NavLink
            to={item.to}
            key={i}
            className={({ isActive }) =>
              twMerge(
                "text-xl",
                isActive
                  ? "text-primary font-medium"
                  : "hover:-translate-y-1 duration-300 hover:border-b-primary hover:border-b-2"
              )
            }
          >
            {item.title}
          </NavLink>
        ))}
        {!isAuthenticated && (
          <button
            className="px-8 py-3 text-back font-medium rounded-3xl bg-gradient-to-tl from-primary to-secondary whitespace-nowrap"
            onClick={() => loginWithPopup()}
          >
            Get Started
          </button>
        )}
        {isAuthenticated && (
          <button
            className="px-8 py-2 text-back font-medium rounded-3xl bg-gradient-to-tl from-primary to-secondary"
            onClick={() => logout()}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
