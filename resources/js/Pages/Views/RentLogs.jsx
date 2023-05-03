//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

//import Head, usePage
import { Head } from "@inertiajs/inertia-react";

function RentLogs({ rentLogs }) {
    return (
        <>
            <Head>
                <title>Rental Buku | Rent Logs</title>
            </Head>
            <Layout>
                <h1 className="mx-5">Rent Log List</h1>

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

export default RentLogs;
