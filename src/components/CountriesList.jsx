

import React from 'react';

import { Link } from 'react-router-dom';

function CountriesList(props) {
    const displayCountries = () => {
        return props.countries.map((country, i) => {
            return (

                <div className="center-content">
                    <Link key={i} to={`/details/${country.cca3}`}>
                        {country.name.official}: {country.flag}
                    </Link>
                </div>

            );
        });
    };

    return (
        <div className="scroll">
            <h1> LAB - WikiCountries</h1>
            <hr />
            <div className="allList" >{displayCountries()}</div>
        </div>
    );
}

export default CountriesList;
