//import React
import React, { useState } from "react";

//import layout
import Layout from "../Layouts/Default";

import { Head } from "@inertiajs/inertia-react";

import { Inertia } from "@inertiajs/inertia";

import Flash from "@/Layouts/Flash";

function BookRent({ users, books, flashMessage }) {
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");

    const storeBookRent = async (e) => {
        e.preventDefault();

        Inertia.post("/book-rent", {
            //data
            user_id: username,
            book_id: title,
        });
    };
    return (
        <>
            <Head>
                <title>Rental Buku | Book Rent</title>
            </Head>
            <Layout>
                <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-md-3">
                    <h1 className="mb-3">Book Rent Form</h1>

                    <div className="message">
                        {flashMessage?.message && (
                            <Flash
                                message={flashMessage.message}
                                type={flashMessage.type}
                            />
                        )}
                    </div>

                    <form action="" onSubmit={storeBookRent}>
                        <div className="mb-3">
                            <label htmlFor="user" className="form-label">
                                User
                            </label>
                            <select
                                name="users"
                                id="user"
                                className="form-control"
                                onChange={(e) => setUsername(e.target.value)}
                            >
                                <option value="">Select User</option>
                                {users.map((users) => (
                                    <option value={users.id}>
                                        {users.username}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="book" className="form-label">
                                Book
                            </label>
                            <select
                                name="books"
                                id="book"
                                className="form-control"
                                onChange={(e) => setTitle(e.target.value)}
                            >
                                <option value="">Select User</option>
                                {books.map((books) => (
                                    <option value={books.id}>
                                        {books.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button className="btn btn-primary w-100" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </Layout>
        </>
    );
}
export default BookRent;
