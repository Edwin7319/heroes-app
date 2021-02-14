import React, {useMemo} from 'react';
import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import {useLocation} from 'react-router-dom'

import queryString from 'query-string';
import searchHeroReducer from "../../reducers/searchHeroReducer";
import Heroes from "../../../data/heroes-data";

export default function Search({history}) {

    const {search: querySearch} = useLocation();

    const query = queryString.parse(querySearch);

    const {criterioBusqueda: nameHero = ''} = query;

    const [{search}, handleInputChange, resetForm] = useForm({
        search: '',
    });

    const filterArray = useMemo(
        () => searchHeroReducer(Heroes, nameHero), [nameHero]
    )

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('?criterioBusqueda=' + search);
        resetForm();
    }

    return (
        <div>
            <h1>SEARCH HEROE</h1>
            <hr/>
            <div className="row">
                <div className="col-sm-4">
                    <h4>Form</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="search"
                            className="form-control"
                            placeholder="EJ: Capitana Marvel...."
                            autoComplete="off"
                            value={search}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-warning btn-sm btn-block"
                        >
                            BUSCAR
                        </button>
                    </form>
                </div>
                <div className="col-sm-8">
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        (nameHero === '' || filterArray.length < 1) ?
                            <div className="alert alert-danger">
                                No existe coincidencias...
                            </div> :
                            filterArray
                                .map(
                                    (hero) => {
                                        return (
                                            <HeroCard
                                                key={hero.id}
                                                {...hero}
                                            />
                                        )
                                    }
                                )
                    }
                </div>
            </div>
        </div>
    );
}