//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

// import Swal from "sweetalert2";

import { Head } from "@inertiajs/inertia-react";

function detailUsers({ user, rentLogs }) {
    return (
        <>
            <Head>
                <title>Rental Buku | Detail User</title>
            </Head>
            <Layout>
                <h1 className="d-flex justify-content-center"> Detail User </h1>

                <div className="mt-5 d-flex justify-content-center">
                    {user.status == "inactive" && (
                        <a
                            href={`/approve-users/${user.slug}`}
                            className="btn btn-success"
                        >
                            Approve User
                        </a>
                    )}
                </div>

                <div className="ml-3 w-25">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            readOnly
                            value={user.username}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            readOnly
                            value={user.phone}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="7"
                            className="form-control"
                        >
                            {user.address}
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">
                            Status
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            readOnly
                            value={user.status}
                        />
                    </div>
                </div>
                {user.status == "active" && (
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
                )}
            </Layout>
        </>
    );
}

export default detailUsers;
