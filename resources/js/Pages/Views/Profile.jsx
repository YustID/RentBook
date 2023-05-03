//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

import { Head, usePage } from "@inertiajs/inertia-react";

function Profile({ rentLogs }) {
    const { auth } = usePage().props;
    return (
        <>
            <Head>
                <title>Rental Buku | Profile</title>
            </Head>
            <Layout>
                <div class="card border-0 rounded-3 shadow-sm">
                    <div class="card-body">
                        Selamat Datang <strong>{auth.user.username}</strong>
                    </div>
                </div>

                <h1 className="d-flex justify-content-center">
                    {" "}
                    Your Rent Logs{" "}
                </h1>

                <div className="my-4 mx-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>User</th>
                                <th>Book</th>
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
            </Layout>
        </>
    );
}

export default Profile;
