//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

import { Head } from "@inertiajs/inertia-react";

import style from "../../../css/category.css";

import Flash from "@/Layouts/Flash";

function deletedUser({ deletedUsers }) {
    return (
        <>
            <Head>
                <title>Rental Buku | DeletedListUser</title>
            </Head>
            <Layout>
                <h1>Deleted List User</h1>

                <div className={style}>
                    <div className="mt-3 d-flex justify-content-center">
                        <a href="/users" className="btn btn-primary">
                            Back To Users
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
                                {deletedUsers.map((user, index) => (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{user.username}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <a
                                                href={
                                                    "restore-users/" + user.id
                                                }
                                            >
                                                Restore
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

export default deletedUser;
