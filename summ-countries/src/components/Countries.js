import React, { useState, useEffect } from 'react'

const url = "https://restcountries.com/v3.1/all"

const Countries = () => {
    const [countries, setCountries] = useState([]);



    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(url);
            const countries = await response.json()
            setCountries(countries);
            console.log(countries)
        }
        fetchCountryData();
    }, [])


    return (
        <>
        {countries.map((country) => {
            const { common, flags, population, region, capital } = country
            return (
                <article>
                  <div className="flag">
                    <img src={flags.svg} alt={common} />
                  </div>
                  <div className="details">
                    <h4 className="country-name">
                      Name: <span>{common}</span>
                    </h4>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
            )
        })}
        </>
    )
}

export default Countries;
