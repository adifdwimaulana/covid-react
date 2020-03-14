import React from 'react';

const Information = ({ global, country }) => {
    const { confirmed, recovered, deaths, lastUpdate, countries } = global

    console.log(countries.Indonesia)


    return (
        <div className="row">
            <div className="card-top-area">
                <div className="card">
                    <div className="card-body confirmed">
                        <h4 className="card-title">
                            Confirmed
                        </h4>
                        <h2 className="value">{confirmed.value}</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body recoverd">
                        <h4 className="card-title">
                            Recovered
                        </h4>
                        <h2 className="value">{recovered.value}</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body deaths">
                        <h4 className="card-title">
                            Death
                        </h4>
                        <h2 className="value">{deaths.value}</h2>
                    </div>
                </div>
            </div>
            <p className="last-update">"Last Update at: " {lastUpdate}</p>
        </div>
    )
}

export default Information;