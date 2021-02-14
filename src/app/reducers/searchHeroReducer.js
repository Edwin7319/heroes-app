export default function searchHeroReducer(state = [], nameHero) {

    if (!nameHero) {
        return [];
    }

    return state
        .filter(
            ({superhero}) => superhero.toString().trim().toLowerCase().includes(nameHero)
        );

}