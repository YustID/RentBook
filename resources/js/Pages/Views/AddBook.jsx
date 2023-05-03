//import React
import React, { useState } from "react";

//import layout
import Layout from "../Layouts/Default";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

import { Inertia } from "@inertiajs/inertia";

import style from "../../../css/addcategory.css";

import pic from "../../../../public/images/bg-technologi.jpg";

function AddBook() {
    const { errors } = usePage().props;

    const [book_code, setBookCode] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const storeAdd = async (e) => {
        e.preventDefault();

        Inertia.post("/add-book", {
            //data
            book_code: book_code,
            title: title,
            image: image,
        });
    };

    return (
        <>
            <Head>
                <title>Rental Buku | Add Book</title>
            </Head>
            <Layout>
                <div className={style}>
                    <h1>Add New Book</h1>

                    <div className="main mt-5 w-50">
                        <form onSubmit={storeAdd}>
                            <div>
                                <label
                                    htmlFor="book_code"
                                    className="name form-label"
                                >
                                    Code
                                </label>
                                <input
                                    type="text"
                                    name="book_code"
                                    id="code"
                                    className="form-control"
                                    onChange={(e) =>
                                        setBookCode(e.target.value)
                                    }
                                    placeholder="Book's Code"
                                />
                                {errors.book_code && (
                                    <div className="alert alert-danger">
                                        {errors.book_code}
                                    </div>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="title"
                                    className="name form-label"
                                >
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={title}
                                    className="form-control"
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Book's Title"
                                />
                                {errors.title && (
                                    <div className="alert alert-danger">
                                        {errors.title}
                                    </div>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="image"
                                    className="name form-label"
                                >
                                    Image
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    className="form-control"
                                    onChange={(e) =>
                                        setImage(e.target.files[0])
                                    }
                                    placeholder="Book's Cover"
                                />

                                {errors.image && (
                                    <div className="alert alert-danger">
                                        {errors.image}
                                    </div>
                                )}
                            </div>
                            <button className="btn btn-success" type="submit">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default AddBook;
