import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header.js";
import {Footer} from "../components/Footer/Footer.tsx";

function Layout() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer />
        </>
    );

}

export default Layout;