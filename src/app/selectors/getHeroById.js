import heroes from './../../data/heroes-data';

export default function getHeroById(id) {

    return heroes
        .find(
            (hero) => hero.id === id
        );
}