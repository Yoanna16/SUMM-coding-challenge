import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Country = () => {
    const [country, setCoutry] = useState([]);

    const { name } = useParams()


    useEffect(() => {
        const fetchCountyData = async () => {
            const response = await fetch(
                `https://restcountries.eu/rest/v2/name/${name}`
              )
              const country = await response.json()
              setCoutry(country)
        }
        fetchCountyData()
        }, [name])
  return (
    <>
    <Link to='/' className="btn btn-light">
        <i className='fas fa-arrow-left'>Back Home</i>
    </Link>
      <h1>Country Data</h1>
    </>
  )
}

export default Country
