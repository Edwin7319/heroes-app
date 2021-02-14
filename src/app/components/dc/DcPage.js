import React from 'react';
import HeroList from "../heroes/HeroList";

export default function DcPage() {
    const namePublisher = 'DC Comics'
    return (
        <>
            <h2>DC PAGE</h2>
            <hr/>
            <HeroList
                publisher={namePublisher}
            />
        </>
    );
}