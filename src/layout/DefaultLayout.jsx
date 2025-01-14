import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../components/Loader";
import GlobalContext from '../contexts/globalContext';
import { useContext } from "react";

function DefaultLayout() {

  const { isLoading } = useContext(GlobalContext);
  
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  );
}

export default DefaultLayout;