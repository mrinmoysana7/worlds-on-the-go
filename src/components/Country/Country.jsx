import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const [visited, setVisited] = useState(false);

    const visitedHandle = () => {
        // One time change the state
        // setVisited(true)

        // Toggle method 1
        setVisited(!visited)
        handleVisitedCountries(country)
        // handleVisitedFlags(flag)

        // Toggle method 2
        // if(visited){
        //     setVisited(false)
        // } else {
        //     setVisited(true)
        // }
        
        // Toggle method 3
        // setVisited(visited ? false : true)

        // console.log('Btn Clicked');
    }
    // console.log(country)
    return (
        <div className={`country ${visited ? 'country-visited' : 'country'}`}>
        {/* <div className={`country ${visited && 'country-visited'}`}> */}
            <img src={country.flags.flags.png} alt="" />
            <h4>Name: {country.name.common}</h4>
            <h4>Region: {country.region.region}</h4>
            <h4>Area:{country.area.area} {country.area.area >= 300000 ? 'Big Country' : 'Small Country'} </h4>
            <button onClick={visitedHandle}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={() => {handleVisitedFlags(country.flags.flags.png)}}>Add Visited Flags</button>
        </div>
    );
};

export default Country;


// "name": {
// "common": "Jamaica",
// "official": "Jamaica"
// },
// "ccn3": {
// "ccn3": "388"
// },
// "currencies": {
// "currencies": {
// "JMD": {
// "name": "Jamaican dollar",
// "symbol": "$"
// }
// }
// },
// "capital": {
// "capital": [
// "Kingston"
// ]
// },
// "region": {
// "region": "Americas"
// },
// "languages": {
// "languages": {
// "eng": "English",
// "jam": "Jamaican Patois"
// }
// },
// "area": {
// "area": 10991
// },
// "cca3": {
// "cca3": "JAM"
// },
// "population": {
// "population": 2961161
// },
// "continents": {
// "continents": [
// "North America"
// ]
// },
// "flags": {
// "flags": {
// "png": "https://flagcdn.com/w320/jm.png",
// "svg": "https://flagcdn.com/jm.svg",
// "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
// }
// }
// },