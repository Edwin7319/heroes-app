import React from 'react';

import HeroList from '../heroes/HeroList';

export default function MarvelPage() {
    const namePublisher = 'Marvel Comics'
    return (
        <>
            <h2>MARVEL PAGE</h2>
            <hr/>
            <HeroList
                publisher={namePublisher}
            />
        </>
    );
}