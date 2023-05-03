//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

import { Head } from "@inertiajs/inertia-react";

import style from "../../../css/category.css";

import Flash from "@/Layouts/Flash";

function deletedBook({ deletedBooks, flashMessage }) {
    return (
        <>
            <Head>
                <title>Rental Buku | DeletedListBooks</title>
            </Head>
            <Layout>
                <h1>Deleted List Book</h1>

                <div className={style}>
                    <div className="mt-3 d-flex justify-content-center">
                        <a href="/books" className="btn btn-primary">
                            Back To Books
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
                                    <th>No</th>
                                    <th>Code</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {deletedBooks.map((book, index) => (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{book.book_code}</td>
                                        <td>{book.title}</td>
                                        <td>{book.status}</td>
                                        <td>
                                            <a href={"restore-book/" + book.id}>
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

export default deletedBook;
