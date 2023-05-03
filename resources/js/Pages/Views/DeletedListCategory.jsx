//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default";

import { Head } from "@inertiajs/inertia-react";

import style from "../../../css/category.css";

import Flash from "@/Layouts/Flash";

function deletedCategory({ deletedCategories, flashMessage }) {
    return (
        <>
            <Head>
                <title>Rental Buku | DeletedListCategory</title>
            </Head>
            <Layout>
                <h1>Deleted List Category</h1>

                <div className={style}>
                    <div className="mt-3 d-flex justify-content-center">
                        <a href="/categories" className="btn btn-primary">
                            Back To Categories
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
                                {deletedCategories.map((category, index) => (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{category.name}</td>
                                        <td>
                                            <a
                                                href={
                                                    "restore-category/" +
                                                    category.id
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

export default deletedCategory;
