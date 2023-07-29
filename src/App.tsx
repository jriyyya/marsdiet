import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { GlobalContextProvider } from "./contexts/globalContext";
import AuthPage from "./pages/HomePage/AuthPage/AuthPage";
import { Auth0Provider } from "@auth0/auth0-react";

const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const AUTH0_CLIENTID = import.meta.env.VITE_AUTH0_CLIENTID;

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/0" element={<div />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<AuthPage />} />
      </Route>
    )
  );
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <GlobalContextProvider>
        <RouterProvider router={router} />
      </GlobalContextProvider>
    </Auth0Provider>
  );
}

function Root() {
  return (
    <main className="relative">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
