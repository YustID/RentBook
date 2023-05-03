//import React
import React, { useState } from "react";

//import layout
import Tampilan from "../../Auth/Default";

//import Head, usePage
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

import Flash from "@/Layouts/Flash";

function Login({ flashMessage }) {
    //destruct props "errors"
    const { errors } = usePage().props;

    //define state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //method "storeLogin"
    const storeLogin = async (e) => {
        e.preventDefault();

        Inertia.post("/login", {
            //data
            username: username,
            password: password,
        });
    };

    return (
        <>
            <Head>
                <title>Rental Buku | Login</title>
            </Head>
            <Tampilan>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="card border-0 rounded-3 shadow-sm">
                            {flashMessage?.message && (
                                <Flash
                                    message={flashMessage.message}
                                    type={flashMessage.type}
                                />
                            )}
                            <div class="card-body mt-3">
                                <h5>LOGIN</h5>
                                <hr />
                                <form onSubmit={storeLogin}>
                                    <div class="mb-3">
                                        <label class="form-label">
                                            Username
                                        </label>
                                        <input
                                            type="username"
                                            class="form-control"
                                            name="username"
                                            id="username"
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            placeholder="Username"
                                        />
                                    </div>
                                    {errors.username && (
                                        <div className="alert alert-danger">
                                            {errors.username}
                                        </div>
                                    )}

                                    <div class="mb-3">
                                        <label class="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            placeholder="Password"
                                        />
                                    </div>
                                    {errors.password && (
                                        <div className="alert alert-danger">
                                            {errors.password}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        class="btn btn-primary w-100"
                                    >
                                        LOGIN
                                    </button>
                                </form>
                                <Link
                                    class="btn btn-primary w-100 mt-2"
                                    href="/register"
                                >
                                    REGISTER
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Tampilan>
        </>
    );
}

export default Login;
