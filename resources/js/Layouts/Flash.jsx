import React from "react";

function Flash({ className, message, flashMessage, type }) {
    return (
        <>
            {type == "success" ? (
                <div className={`btn btn-success mb-2 ${className} disabled`}>
                    {message}
                </div>
            ) : (
                <div className={`btn btn-danger mb-2 ${className} disabled`}>
                    {message}
                </div>
            )}
        </>
    );
}

export default Flash;
