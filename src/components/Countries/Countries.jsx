import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    // const countries = countriesData.countries;
    console.Log(countriesData);
    return (
        <div>
            <h1>In the countries: </h1>        
        </div>
    );
};

export default Countries;