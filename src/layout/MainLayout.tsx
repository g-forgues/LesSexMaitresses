import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header.tsx";
import {Footer} from "../components/Footer/Footer.tsx";
import classes from './MainLayout.module.css';

function Layout() {
    return (
        <>
            <Header/>
            <main className={classes.main}>
                <Outlet/>
            </main>
            <Footer />
        </>
    );

}

export default Layout;