import React, { useState } from "react";

import { Inertia } from "@inertiajs/inertia";

import { usePage } from "@inertiajs/inertia-react";

function MasterPublic({ children }) {
    const { auth, category } = usePage().props;
    const { url } = usePage();

    const [searche, setSearche] = useState("");

    const handleSubmit = (e) => {
        // $request->search
        // [key => value]
        e.preventDefault();
        Inertia.get(`/search?search=${searche}`);
    };

    if (auth.user) {
        return (
            <>
                <body>
                    {/* <!-- Page Wrapper --> */}
                    <div id="wrapper">
                        {/* <!-- Start Sidebar --> */}
                        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark">
                            {/* <!-- Sidebar - Brand --> */}
                            <a
                                class="sidebar-brand d-flex align-items-center justify-content-center"
                                href="index.html"
                            >
                                <div class="sidebar-brand-text mx-3">
                                    Rental Buku
                                </div>
                            </a>
                            {/*<!-- Divider --> */}
                            <hr class="sidebar-divider my-0" />
                            {/* <!-- Nav Item - Dashboard --> */}
                            {auth.user.role_id == 1 ? (
                                <div>
                                    <li class="nav-item active">
                                        <a
                                            class={
                                                url === "/dashboard"
                                                    ? "nav-link dropdown-side hidup"
                                                    : "nav-link dropdown-side"
                                            }
                                            href="/dashboard"
                                        >
                                            <i class="fas fa-fw fa-tachometer-alt"></i>
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a
                                            class={
                                                url === "/books" ||
                                                url === "/add-book" ||
                                                url === "/deleted-book"
                                                    ? "nav-link dropdown-side hidup"
                                                    : "nav-link dropdown-side"
                                            }
                                            href="/books"
                                        >
                                            <i class="fas fa-fw fa-tachometer-alt"></i>
                                            <span>Books</span>
                                        </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a
                                            class={
                                                url === "/categories" ||
                                                url === "/add-category" ||
                                                url === "/deleted-category" ||
                                                url ===
                                                    "/edit-category/" + category
                                                    ? "nav-link dropdown-side hidup"
                                                    : "nav-link dropdown-side"
                                            }
                                            href="/categories"
                                        >
                                            <i class="fas fa-fw fa-tachometer-alt"></i>
                                            <span>Categories</span>
                                        </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a
                                            class={
                                                url === "/users"
                                                    ? "nav-link dropdown-side hidup"
                                                    : "nav-link dropdown-side"
                                            }
                                            href="/users"
                                        >
                                            <i class="fas fa-fw fa-tachometer-alt"></i>
                                            <span>Users</span>
                                        </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a
                                            class={
                                                url === "/rent-logs"
                                                    ? "nav-link dropdown-side hidup"
                                                    : "nav-link dropdown-side"
                                            }
                                            href="/rent-logs"
                                        >
                                            <i class="fas fa-fw fa-tachometer-alt"></i>
                                            <span>Rent Logs</span>
                                        </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a
                                            class={
                                                url === "/"
                                                    ? "nav-link dropdown-side hidup"
                                                    : "nav-link dropdown-side"
                                            }
                                            href="/"
                                        >
                                            <i class="fas fa-fw fa-tachometer-alt"></i>
                                            <span>Book List</span>
                                        </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a
                                            class={
                                                url === "/book-rent"
                                                    ? "nav-link dropdown-side hidup"
                                                    : "nav-link dropdown-side"
                                            }
                                            href="book-rent"
                                        >
                                            <i class="fas fa-fw fa-tachometer-alt"></i>
                                            <span>Book Rent</span>
                                        </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a
                                            class={
                                                url === "/return-book"
                                                    ? "nav-link dropdown-side hidup"
                                                    : "nav-link dropdown-side"
                                            }
                                            href="return-book"
                                        >
                                            <i class="fas fa-fw fa-tachometer-alt"></i>
                                            <span>Return Book</span>
                                        </a>
                                    </li>
                                </div>
                            ) : (
                                <div>
                                    <li class="nav-item active">
                                        <a
                                            class={
                                                url === "/profile"
                                                    ? "nav-link dropdown-side hidup"
                                                    : "nav-link dropdown-side"
                                            }
                                            href="/profile"
                                        >
                                            <i class="fas fa-fw fa-tachometer-alt"></i>
                                            <span>Profile</span>
                                        </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a
                                            class={
                                                url === "/"
                                                    ? "nav-link dropdown-side hidup"
                                                    : "nav-link dropdown-side"
                                            }
                                            href="/"
                                        >
                                            <i class="fas fa-fw fa-tachometer-alt"></i>
                                            <span>Book List</span>
                                        </a>
                                    </li>
                                </div>
                            )}
                        </ul>
                        {/* <!-- End of Sidebar -->
     
                        <!-- Content Wrapper --> */}
                        <div id="content-wrapper" class="d-flex flex-column">
                            {/* <!-- Start Topbar --> */}
                            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-3 static-top shadow">
                                {/* <!-- Topbar Search --> */}

                                <form
                                    onSubmit={(e) => {
                                        handleSubmit(e);
                                    }}
                                    class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
                                >
                                    <div class="input-group">
                                        <input
                                            name="search"
                                            type="text"
                                            id="search"
                                            class="form-control bg-light border-0 small"
                                            placeholder="Search for..."
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) => {
                                                setSearche(e.target.value);
                                            }}
                                        />
                                    </div>
                                </form>

                                {/* <!-- Topbar Logout --> */}
                                <ul class="navbar-nav ml-auto">
                                    <div class="topbar-divider d-none d-sm-block"></div>
                                    <div class="dropdown-divider"></div>
                                    <a
                                        class="dropdown-item"
                                        href="/logout"
                                        data-toggle="modal"
                                        data-target="#logoutModal"
                                    >
                                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
                                </ul>
                            </nav>
                            {/* <!-- End of Topbar --> */}
                            {/* <!-- Start Main Content --> */}

                            <main>{children}</main>
                            {/* <!-- End of Main Content -->    */}
                        </div>
                    </div>
                    {/* <!-- End of Content Wrapper --> */}
                </body>
            </>
        );
    } else {
        return (
            <>
                <body>
                    {/* <!-- Page Wrapper --> */}
                    <div id="wrapper">
                        {/* <!-- Start Sidebar --> */}
                        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark">
                            {/* <!-- Sidebar - Brand --> */}
                            <a
                                class="sidebar-brand d-flex align-items-center justify-content-center"
                                href="index.html"
                            >
                                <div class="sidebar-brand-text mx-3">
                                    Rental Buku
                                </div>
                            </a>
                            {/*<!-- Divider --> */}
                            <hr class="sidebar-divider my-0" />
                            {/* <!-- Nav Item - Dashboard --> */}
                        </ul>
                        {/* <!-- End of Sidebar -->
    
                        <!-- Content Wrapper --> */}
                        <div id="content-wrapper" class="d-flex flex-column">
                            {/* <!-- Start Topbar --> */}
                            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-3 static-top shadow">
                                {/* <!-- Topbar Search --> */}
                                <form
                                    // action="/"
                                    onSubmit={(e) => {
                                        handleSubmit(e);
                                    }}
                                    class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
                                >
                                    <div class="input-group">
                                        <input
                                            name="search"
                                            type="text"
                                            id="search"
                                            class="form-control bg-light border-0 small"
                                            placeholder="Search for..."
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                            onChange={(e) =>
                                                setSearche(e.target.value)
                                            }
                                        />
                                        {/* <input type="submit" /> */}
                                    </div>
                                </form>
                                {/* <!-- End Topbar Search --> */}
                                {/* <!-- Topbar Logout --> */}
                                <ul class="navbar-nav ml-auto">
                                    <div class="topbar-divider d-none d-sm-block"></div>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/login">
                                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Login
                                    </a>
                                </ul>
                            </nav>
                            {/* <!-- End of Topbar --> */}
                            {/* <!-- Start Main Content --> */}
                            {/* <Search /> */}
                            <main>{children}</main>
                            {/* <!-- End of Main Content -->    */}
                        </div>
                    </div>
                    {/* <!-- End of Content Wrapper --> */}
                </body>
            </>
        );
    }
}

export default MasterPublic;
