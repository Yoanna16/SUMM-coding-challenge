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
        <section className='grid'>
        {countries.map((country) => {
            const { flags, population, region, capital, name, ccn3 } = country
            return (
                <article key={ccn3} className='card'>
                  <div className="flag">
                    <img src={flags.svg} alt={name.common} />
                  </div>
                  <div className="details">
                    <h3 className="country-name">
                     <span>{name.common}</span>

                    </h3>
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
        </section>
        </>
    )
}

export default Countries;
