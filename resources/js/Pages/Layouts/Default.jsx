//import React
import React from "react";

//import Link, usePage
import { Link, usePage } from "@inertiajs/inertia-react";

function Layout({ children, users }) {
    const { url } = usePage();
    const { auth } = usePage().props;

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
                            href="/dashboard"
                        >
                            <div class="sidebar-brand-text mx-3">
                                Rental Buku
                            </div>
                        </a>
                        {/*<!-- Divider --> */}
                        <hr class="sidebar-divider my-0" />
                        {/* <!-- Nav Item - Dashboard --> */}

                        {auth.user.role_id === 1 ? (
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
                                            url === "/edit-category/"
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
                                            url === "/users" ||
                                            url === "/deleted-users" ||
                                            url === "/registered-users"
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
                                        href="/book-rent"
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
                                        href="/return-book"
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
                                        href="profile"
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
}

export default Layout;
