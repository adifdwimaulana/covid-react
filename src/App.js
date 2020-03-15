import React from 'react';
import { Header } from './components/Header';
import Information from './components/Information';
import './Bootstrap.css'
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      global: [],
      countries: [],
      country: '',
      showCountry: false
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
  }

  render() {

    const { global, country, countries, showCountry } = this.state;
    if (global.length == 0 && countries.length == 0) {
      return null;
    }

    const chooseCountry = []

    for (let [key, value] of Object.entries(countries)) {
      // console.log(`${key}: ${value}`)
      chooseCountry.push(<option value={value} key={key}>{key}</option>)
    }
    console.log(country)

    return (
      <div className="App">
        <div className="container">
          <Header />
          <select
            className="select-country"
            onChange={this.handleChange}
          >
            <option value=''>Global</option>
            {chooseCountry}
          </select>
          <Information global={global} />
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


export default App;
