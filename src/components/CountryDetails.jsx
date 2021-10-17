import React from "react";

class CountryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: null
        };
    }

    countryDetails(props) {
        return props.countries.map((country) => {
            if (country.cca3 === props.match.params.id) {
                return (
                    <div>
                        <h1>{country.name.official}</h1>
                        <h2>{country.flag}</h2>
                        <h3>Capital: {country.capital[0]}</h3>
                        <h3>Landlocked: {country.landlocked ? 'Yes' : 'No'}</h3>
                        <h3>Currency: </h3>
                        <ul>
                            {country.currency.map((currency, i) => {
                                return <li key={i}>{currency}</li>;
                            })}
                        </ul>
                        <h3>Region: {country.subregion}</h3>
                        <h3>
                            Location: Lat: {country.latlng[0]}, Long: {country.latlng[1]}
                        </h3>
                    </div>
                );
            }
        });

    }
}

export default CountryDetails;