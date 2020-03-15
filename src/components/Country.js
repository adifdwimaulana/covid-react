import React from 'react'

const Country = ({ country, showCountry, countries }) => {

    const chooseCountry = []


    for (let [key, value] of Object.entries(countries)) {
        console.log(`${key}: ${value}`)
        chooseCountry.push(<option value={value}>{key}</option>)
    }

    return (
        <select className="select-country">
            {chooseCountry}
        </select>
    )
}

export default Country