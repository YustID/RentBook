//import React
import React from "react";

//import layout
import Layout from "../Layouts/MasterPublic";

import { Head } from "@inertiajs/inertia-react";

import pic from "../../../../public/images/bg-technologi.jpg";

function Public({ books }) {
    return (
        <>
            <Head>
                <title>Rental Buku | Landing Page</title>
            </Head>

            <Layout>
                <div className="mx-5">
                    <div className="row">
                        {books.map((book) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                                <div class="card">
                                    {book.cover == null ? (
                                        <div className="">
                                            <img
                                                src={pic}
                                                alt=""
                                                className="card-img-top"
                                                height="250"
                                            />
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
                                                className="card-img-top"
                                                height="250"
                                            />
                                        </div>
                                    )}
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            {book.book_code}
                                        </h5>
                                        <p class="card-text">{book.title}</p>
                                        <p
                                            className={
                                                book.status === "in stock"
                                                    ? "card-text text-end fw-bold text-success"
                                                    : "card-text text-end fw-bold text-danger"
                                            }
                                        >
                                            {book.status}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Public;
