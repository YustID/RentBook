//import React
import React, { useState } from "react";

//import layout
import Layout from "../Layouts/Default";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

import { Inertia } from "@inertiajs/inertia";

import style from "../../../css/editcategory.css";

function EditCategory({ category }) {
    const { errors } = usePage().props;

    const [name, setName] = useState(category.name);

    const storeEdit = async (e) => {
        e.preventDefault();

        Inertia.put(`/edit-category/${category.id}`, {
            name: name,
        });
    };

    return (
        <>
            <Head>
                <title>Rental Buku | Edit Category</title>
            </Head>
            <Layout>
                <div className={style}>
                    <h1>Edit Category</h1>

                    <div className="main mt-5 w-50">
                        <form onSubmit={storeEdit}>
                            <div>
                                {errors.name && (
                                    <div className="alert alert-danger">
                                        {errors.name}
                                    </div>
                                )}
                                <label
                                    htmlFor="name"
                                    className="name form-label"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
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

export default EditCategory;
