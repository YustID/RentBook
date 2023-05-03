//import React
import React from "react";

//import Link, usePage
import { Link, usePage } from "@inertiajs/inertia-react";

import style from "../../css/auth.module.css";

function Layout({ children }) {
    //destruct props "auth"
    const { auth } = usePage().props;

    return (
        <>
            <header>
                <div className={style.body}>
                    <main style={{ marginTop: "100px" }}>{children}</main>
                </div>
            </header>
        </>
    );
}

export default Layout;
