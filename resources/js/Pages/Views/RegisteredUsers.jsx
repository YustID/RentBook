//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

// import Swal from "sweetalert2";

import { Head } from "@inertiajs/inertia-react";

import style from "../../../css/category.css";

// import Flash from "@/Layouts/Flash";

function registeredUsers({ registeredUsers }) {
    return (
        <>
            <Head>
                <title>Rental Buku | Registered User List</title>
            </Head>
            <Layout>
                <h1>Registered User List</h1>

                <div className={style}>
                    <div className="mt-3 d-flex justify-content-center">
                        <a href="/users" className="btn btn-primary">
                            Approved User List
                        </a>
                    </div>

                    <div className="my-4 mx-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>UserName</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registeredUsers.map((user, index) => (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{user.username}</td>
                                        <td>
                                            {user.phone ? (
                                                <td>{user.phone}</td>
                                            ) : (
                                                <td>-</td>
                                            )}
                                        </td>
                                        <td>
                                            <a href={`detail-users/${user.id}`}>
                                                Detail
                                            </a>
                                        </td>
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

export default registeredUsers;
