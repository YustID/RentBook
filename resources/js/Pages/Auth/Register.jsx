//import React
import React, { useState } from "react";

//import layout
import Layout from "../../Auth/Default";

//import Head, usePage
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

function Register() {
    //destruct props "errors"
    const { errors } = usePage().props;

    //define state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    //method "storeRegister"
    const storeRegister = async (e) => {
        e.preventDefault();

        Inertia.post("/register", {
            //data
            username: username,
            password: password,
            phone: phone,
            address: address,
        });
    };

    return (
        <>
            <Head>
                <title>Rental Buku | Register</title>
            </Head>
            <Layout>
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card border-0 rounded-3 shadow-sm">
                            <div class="card-body">
                                <h5>REGISTER</h5>
                                <hr />
                                <form onSubmit={storeRegister}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="username"
                                                    id="username"
                                                    onChange={(e) =>
                                                        setUsername(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Username"
                                                />
                                            </div>
                                            {errors.username && (
                                                <div className="alert alert-danger">
                                                    {errors.username}
                                                </div>
                                            )}
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    class="form-control"
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Password"
                                                />
                                            </div>
                                            {errors.password && (
                                                <div className="alert alert-danger">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="phone"
                                                    id="phone"
                                                    onChange={(e) =>
                                                        setPhone(e.target.value)
                                                    }
                                                    placeholder="Phone"
                                                />
                                            </div>
                                            {errors.phone && (
                                                <div className="alert alert-danger">
                                                    {errors.phone}
                                                </div>
                                            )}
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">
                                                    Address
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="address"
                                                    id="address"
                                                    onChange={(e) =>
                                                        setAddress(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Address"
                                                />
                                            </div>
                                            {errors.address && (
                                                <div className="alert alert-danger">
                                                    {errors.address}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                        >
                                            REGISTER
                                        </button>
                                        <Link
                                            class="btn btn-primary w-100 mt-2"
                                            href="/login"
                                        >
                                            LOGIN
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Register;
