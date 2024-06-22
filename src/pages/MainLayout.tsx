import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header.js";

function Layout() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    );

}

export default Layout;