import heroes from '../../data/heroes-data';

export default function getHeroByPublisher(publisher) {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    const findPublisher = validPublisher.includes(publisher);

    if (!findPublisher) {
        return [...heroes]
    }

    return heroes
        .filter(
            (hero) => hero.publisher === publisher
        );
}