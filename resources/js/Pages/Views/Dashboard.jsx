//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

import style from "../../../css/dashboard.css";

function Dashboard({ book_count, category_count, user_count, rentLogs }) {
    const { auth } = usePage().props;
    return (
        <>
            <Head>
                <title>Rental Buku | Dashboard</title>
            </Head>
            <Layout>
                <div class="card border-0 rounded-3 shadow-sm">
                    <div class="card-body">
                        Selamat Datang <strong>{auth.user.username}</strong>
                    </div>
                </div>

                <div className={style}>
                    <div className="row mt-3">
                        <div className="col-lg-4">
                            <div className="card-data book">
                                <div className="row">
                                    <div className="col-6">
                                        <i class="bi bi-journal-bookmark"></i>
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-center align-items-end">
                                        <div className="card-desc">Books</div>
                                        <div className="card-count">
                                            {book_count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-data category">
                                <div className="row">
                                    <div className="col-6">
                                        <i class="bi bi-list-task"></i>
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-center align-items-end">
                                        <div className="card-desc">
                                            Categories
                                        </div>
                                        <div className="card-count">
                                            {category_count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-data user">
                                <div className="row">
                                    <div className="col-6">
                                        <i class="bi bi-people"></i>
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-center align-items-end">
                                        <div className="card-desc">Users</div>
                                        <div className="card-count">
                                            {user_count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rent-log my-4 mx-5 mt-5">
                        <h2>Rent Log</h2>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Users</th>
                                    <th>Book Tittle</th>
                                    <th>Rent Date</th>
                                    <th>Return Date</th>
                                    <th>Actual Return Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rentLogs.map((rentLogs, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            rentLogs.actual_return_date == null
                                                ? ""
                                                : rentLogs.return_date <
                                                  rentLogs.actual_return_date
                                                ? "bg-danger"
                                                : "bg-success"
                                        }
                                    >
                                        <td>{++index}</td>
                                        <td>{rentLogs.user.username}</td>
                                        <td>{rentLogs.book.title}</td>
                                        <td>{rentLogs.rent_date}</td>
                                        <td>{rentLogs.return_date}</td>
                                        <td>{rentLogs.actual_return_date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Dashboard;
