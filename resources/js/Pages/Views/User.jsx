//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

import Swal from "sweetalert2";

import { Head } from "@inertiajs/inertia-react";

import { Inertia } from "@inertiajs/inertia";

import style from "../../../css/category.css";

import Flash from "@/Layouts/Flash";

// import Flash from "@/Layouts/Flash";

function User({ users, flashMessage }) {
    const deletedUser = async (slug) => {
        Swal.fire({
            title: "Are you sure?",
            text: "To delete this category",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(`/delete-users/${slug}`);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    return (
        <>
            <Head>
                <title>Rental Buku | User</title>
            </Head>
            <Layout>
                <h1>User List</h1>

                <div className={style}>
                    <div className="mt-3 d-flex justify-content-center">
                        <a href="registered-users" className="btn btn-primary">
                            New Registered User
                        </a>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <a href="deleted-users" className="btn btn-danger">
                            View Banned User
                        </a>
                    </div>

                    <div className="message">
                        {flashMessage?.message && (
                            <Flash
                                message={flashMessage.message}
                                type={flashMessage.type}
                            />
                        )}
                    </div>

                    <div className="my-4 mx-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Username</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
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
                                            <button
                                                onClick={() =>
                                                    deletedUser(user.slug)
                                                }
                                            >
                                                Ban User
                                            </button>
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

export default User;
