//import React
import React, { useState } from "react";

//import layout
import Layout from "../Layouts/Default";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

import { Inertia } from "@inertiajs/inertia";

import style from "../../../css/addcategory.css";

function AddCategory() {
    const { errors } = usePage().props;

    const [name, setName] = useState("");

    const storeAdd = async (e) => {
        e.preventDefault();

        Inertia.post("/add-category", {
            //data
            name: name,
        });
    };

    return (
        <>
            <Head>
                <title>Rental Buku | Add Category</title>
            </Head>
            <Layout>
                <div className={style}>
                    <h1>Add New Category</h1>

                    <div className="main mt-5 w-50">
                        <form onSubmit={storeAdd}>
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
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Category Name"
                                />
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

export default AddCategory;
