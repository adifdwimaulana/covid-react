import React from 'react';
import { Header } from './components/Header';
import Information from './components/Information';
import Country from './components/Country';
import './Bootstrap.css'
import './App.css';
import propTypes from 'prop-types';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      global: [],
      countries: [],
      country: '',
      showCountry: false,
      countryChoice: ''
    }
  }

  componentDidMount() {
    Axios.get('https://covid19.mathdro.id/api')
      .then((response) => {
        this.setState({ global: response.data })
        // console.log(this.state.global)
      })

    Axios.get('https://covid19.mathdro.id/api/countries')
      .then((response) => {
        this.setState({ countries: response.data.countries })
        // console.log(this.state.countries)
      })
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({ country: event.target.value })
    const url = 'https://covid19.mathdro.id/api/countries/'
    const country = event.target.value

    const newUrl = url.concat(country)

    Axios.get(newUrl)
      .then((response) => {
        this.setState({ countryChoice: response.data })
        // console.log(response.data)
      })

    if (event.target.value != '') {
      this.setState({ showCountry: true })
    } else {
      this.setState({ showCountry: false })
    }
  }

  render() {

    const { global, country, countries, showCountry, countryChoice } = this.state;
    if (global.length == 0 && countries.length == 0) {
      return null;
    }

    const chooseCountry = []

    for (let [key, value] of Object.entries(countries)) {
      // console.log(`${key}: ${value}`)
      chooseCountry.push(<option value={key} key={key}>{key}</option>)
    }

    // console.log(country)
    // console.log(showCountry)

    return (
      <div className="App">
        <div className="container">
          <Header />
          <Information global={global} />
          <select
            className="select-country"
            onChange={this.handleChange}
          >
            <option value=''>Global</option>
            {chooseCountry}
          </select>
          {showCountry ? <Country country={country} countryChoice={countryChoice} /> : null}
          <p
            className="last-update"
            style={{
              textAlign: 'center',
              marginTop: 30,
            }}

          >"Last Update at: {global.lastUpdate}" </p>
        </div>
      </div>
    )
  }
}

Information.propTypes = {
  global: propTypes.object
}

Country.propTypes = {
  country: propTypes.string,
  countryChoice: propTypes.object
}


export default App;
