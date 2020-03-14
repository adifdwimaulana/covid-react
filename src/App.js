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
      country: ''
    }
  }

  componentDidMount() {
    Axios.get('https://covid19.mathdro.id/api')
      .then((response) => {
        this.setState({ global: response.data })
        // console.log(this.state.global)
      })
  }

  render() {
    if (this.state.global.length == 0) {
      return null;
    }
    const { global, country } = this.state
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Information global={global} country={country} />
        </div>
      </div>
    )
  }
}



export default App;
