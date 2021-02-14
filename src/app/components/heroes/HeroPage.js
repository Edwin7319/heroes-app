import React, {useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import getHeroById from '../../selectors/getHeroById';

export default function HeroPage({history}) {

    const {heroId} = useParams();

    const hero = useMemo(
        () => getHeroById(heroId), [heroId]
    );

    // const hero = getHeroById(heroId);

    if (!hero) {
        return (<Redirect to="/"/>)
    }

    const {
        id,
        superhero,
        alter_ego,
        publisher,
        first_appearance,
    } = hero;

    const handleReturn = () => {
        history.length <= 2 ?
            history.push('/') :
            history.goBack();
    }

    return (
        <div className="row mt-5">
            <div className="col-sm-4 animate__animated animate__slideInLeft">
                <img
                    className="img-thumbnail"
                    src={`../assets/heroe-images/${heroId}.jpg`}
                    alt={`image-${id}`}
                />
            </div>
            <div className="col-s-8">
                <h3 className="mt-2 mb-4"><b>{superhero}</b></h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Primera aparición:</b> {first_appearance}</li>
                    <li className="list-group-item text-right" style={{color: "grey"}}>{publisher}</li>
                </ul>
                <button
                    className="btn btn-sm btn-outline-secondary btn-block"
                    onClick={handleReturn}
                >
                    Volver
                </button>
            </div>
        </div>
    );
}