import React from 'react';

export default function Login({history}) {

    const handleLogin = () => {
        // Mantiene el historial del navegador
        history.push('/');

        // Elimina el historial del navegador
        history.replace('/');
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-8 mx-auto text-center">
                        <h2>LOGIN</h2>
                        <hr/>
                    </div>
                    <div className="col-sm-6 mx-auto">
                        <button
                            className="btn btn-sm btn-success btn-block"
                        onClick={handleLogin}
                        >
                            LOGGIN
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}