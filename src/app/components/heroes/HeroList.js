import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

import getHeroByPublisher from '../../selectors/getHeroByPublisher';
import HeroCard from './HeroCard';

export default function HeroList({publisher}) {

    const heroes = useMemo(
        () => getHeroByPublisher(publisher), [publisher]
    );
    // const heroes = getHeroByPublisher(publisher);

    return (
        <div className="row">
            {
                heroes
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
    );
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired,
}