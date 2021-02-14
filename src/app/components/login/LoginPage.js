import React, {useContext} from 'react';
import useForm from '../../hooks/useForm';
import {typesApp} from '../../types/types';
import {AuthContext} from '../../auth/AuthContext';

export default function Login({history}) {

    const lastPath = localStorage.getItem('lastPath') || '/';

    const [{name}, handleInputChange, resetForm] = useForm({
        name: '',
    });

    const {dispatch} = useContext(AuthContext);

    const {login} = typesApp;

    const handleLogin = () => {
        // Mantiene el historial del navegador
        // history.push('/');

        // Elimina el historial del navegador
        // history.replace('/');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: login,
            payload: {
                name
            },
        });
        resetForm();
        history.replace(lastPath);
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-8 mx-auto text-center">
                        <h2>LOGIN</h2>
                        <hr/>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="EJ: USER ABC"
                                autoComplete="off"
                                value={name}
                                onChange={handleInputChange}
                            />
                            <button
                                type="submit"
                                className="btn btn-sm btn-success btn-block mt-3"
                            >
                                LOGGIN
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}