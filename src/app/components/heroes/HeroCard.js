import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


export default function HeroCard(
    {
        id,
        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters,
    }
) {
    return (
        <div className="col-sm-6 animate__animated animate__jackInTheBox">
            <div className="card text-dark mt-5" style={{maxWidth: 540}}>
                <div className="row g-0">
                    <div className="col-sm-4">
                        <img
                            className="img-fluid"
                            src={`./assets/heroe-images/${id}.jpg`}
                            alt={`image-${id}`}
                        />
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                <b>{`${superhero}`.toUpperCase()}</b>
                            </h5>
                            <hr/>
                            <p className="card-text">
                                {alter_ego}
                            </p>
                            {
                                (alter_ego !== characters) &&
                                <p className="card-text">
                                    <b>Alias: </b>{characters}
                                </p>
                            }
                            <p className="card-text">
                                <small className="text-muted">
                                    {first_appearance} - {publisher}
                                </small>
                            </p>
                            <div className="d-flex flex-row-reverse">
                                <div className="p-2">
                                    <Link to={`./hero/${id}`}>
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            style={{color: "black"}}
                                        > +
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

HeroCard.propTypes = {
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
}