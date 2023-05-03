//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

import Swal from "sweetalert2";

import { Head } from "@inertiajs/inertia-react";

import { Inertia } from "@inertiajs/inertia";

import style from "../../../css/category.css";

import Flash from "@/Layouts/Flash";

function Category({ categories, flashMessage }) {
    const deleteCategory = async (id) => {
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
                Inertia.delete(`/delete-category/${id}`);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };

    return (
        <>
            <Head>
                <title>Rental Buku | Category</title>
            </Head>
            <Layout>
                <h1>Category List</h1>

                <div className={style}>
                    <div className="mt-3 d-flex justify-content-center">
                        <a href="add-category" className="btn btn-primary">
                            Add Data Category
                        </a>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <a href="deleted-category" className="btn btn-primary">
                            View Deleted Data
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
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, index) => (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{category.name}</td>
                                        <td>
                                            <a
                                                href={`edit-category/${category.id}`}
                                            >
                                                Edit
                                            </a>
                                            <button
                                                onClick={() =>
                                                    deleteCategory(category.id)
                                                }
                                            >
                                                Delete
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

export default Category;
