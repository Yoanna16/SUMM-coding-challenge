import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../country.css';

const Country = () => {
  const [country, setCountry] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  return (
    <>
    <section className="country">
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left">Back Home</i>
      </Link>
        {country.map((c) => {
          const {
            ccn3,
            flags,
            name,
            population,
            region,
            subregion,
            capital,
            borders,
          } = c;
          return (
            <article key={ccn3}>
              <div className="country-inner">
                <div className="flag">
                  <img src={flags.svg} alt={name.common} />
                </div>

                <div className="country-details">
                  <div>
                    <h2>{name.common}</h2>
                    <h5>
                      Native Name: <span>{name.official}</span>
                    </h5>
                    <h5>
                      Population: <span>{population.toLocaleString()}</span>
                    </h5>
                    <h5>
                      Region: <span>{region}</span>
                    </h5>
                    <h5>
                      Sub Region: <span>{subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{capital[0]}</span>{" "}
                    </h5>
                  </div>
                  <div>
                <h3>Border Countries: </h3>
                <div className="borders">
                  {borders.map((border) => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    )
                  })}
                </div>
              </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </>
  );
};

export default Country;
