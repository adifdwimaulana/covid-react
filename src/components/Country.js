import React from 'react'

const Country = ({ country, countryChoice }) => {
    if (countryChoice.length == 0) {
        return null
    }
    // console.log(countryChoice.confirmed.value)
    const { confirmed, recovered, deaths } = countryChoice

    return (
        <>
            <h4>{country}</h4>
            <div className="row">
                {/* Start Top Area */}
                <div className="card-top-area">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                Confirmed
                        </h4>
                            <h2 className="value confirmed">{confirmed.value}</h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                Recovered
                        </h4>
                            <h2 className="value recovered">{recovered.value}</h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                Death
                        </h4>
                            <h2 className="value deaths">{deaths.value}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Country