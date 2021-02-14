import React from 'react';
import HeroList from '../heroes/HeroList';

export default function AllHeroePage() {


    return (
        <>
            <h2>ALL HEROES PAGE</h2>
            <hr/>
            <HeroList
                publisher="all"
            />
        </>
    );
}