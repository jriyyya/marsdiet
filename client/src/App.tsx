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
import AuthPage from "./pages/AuthPage/AuthPage";
import { Auth0Provider } from "@auth0/auth0-react";
import ProtectedRoute, { ProtectedTypes } from "./common/ProtectedRoute";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import HelpPage from "./pages/HelpPage/HelpPage";

const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const AUTH0_CLIENTID = import.meta.env.VITE_AUTH0_CLIENTID;

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* Public Only Routes -> Authenticated users can not visit */}
        <Route
          path="/"
          element={<ProtectedRoute type={ProtectedTypes.PUBLICONLY} />}
        >
          <Route index element={<HomePage />} />
          <Route element={<HelpPage />} path="/help" />
          <Route path="/auth" element={<AuthPage />} />
        </Route>

        {/* Private Only Routes -> Non Authenticated users can not visit */}
        <Route
          path="/"
          element={<ProtectedRoute type={ProtectedTypes.PRIVATEONLY} />}
        >
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
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
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
