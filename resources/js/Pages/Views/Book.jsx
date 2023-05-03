//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

import Swal from "sweetalert2";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

import { Inertia } from "@inertiajs/inertia";

import style from "../../../css/category.css";

import Flash from "@/Layouts/Flash";

function Book({ books, flashMessage }) {
    const deleteBook = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "To delete this book",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(`/delete-book/${id}`);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    return (
        <>
            <Head>
                <title>Rental Buku | Books</title>
            </Head>
            <Layout>
                <h1>Book List</h1>

                <div className={style}>
                    <div className="mt-3 d-flex justify-content-center">
                        <a href="add-book" className="btn btn-primary">
                            Add Data Book
                        </a>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <a href="deleted-book" className="btn btn-primary">
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
                                    <th>Code</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{book.book_code}</td>
                                        <td>{book.title}</td>
                                        <td>{book.status}</td>
                                        <td>
                                            <a href={`edit-book/${book.id}`}>
                                                Edit
                                            </a>
                                            <button
                                                onClick={() =>
                                                    deleteBook(book.id)
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

export default Book;
