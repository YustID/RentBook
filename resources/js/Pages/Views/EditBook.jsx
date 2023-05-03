//import React
import React, { useState } from "react";

//import layout
import Layout from "../Layouts/Default";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

import { Inertia } from "@inertiajs/inertia";

import style from "../../../css/addcategory.css";

import pic from "../../../../public/images/bg-technologi.jpg";

function AddBook({ book }) {
    const { errors } = usePage().props;

    const [book_code, setBookCode] = useState(book.book_code);
    const [title, setTitle] = useState(book.title);
    const [image, setImage] = useState("");

    const storeAdd = async (e) => {
        e.preventDefault();

        Inertia.post(`/edit-book/${book.id}`, {
            //data
            _method: "patch",
            book_code: book_code,
            title: title,
            image: image,
        });
    };

    return (
        <>
            <Head>
                <title>Rental Buku | Edit Book</title>
            </Head>
            <Layout>
                <div className={style}>
                    <h1>Edit Book</h1>

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
                                    value={book_code}
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
                                    onChange={(e) => {
                                        console.log(e.target.files);
                                        setImage(e.target.files[0]);
                                        console.log(image);
                                    }}
                                    placeholder="Book's Cover"
                                />
                                {errors.image && (
                                    <div className="alert alert-danger">
                                        {errors.image}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="currrentImage"
                                    className="form-label"
                                >
                                    Current Image
                                </label>

                                {book.cover == null ? (
                                    <div>
                                        <img src={pic} alt="" />
                                    </div>
                                ) : (
                                    <div>
                                        <img
                                            src={
                                                location.protocol +
                                                "//" +
                                                location.host +
                                                "/storage/cover/" +
                                                book.cover
                                            }
                                            alt=""
                                        />
                                    </div>
                                )}
                            </div>
                            <button className="btn btn-success" type="submit">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default AddBook;
