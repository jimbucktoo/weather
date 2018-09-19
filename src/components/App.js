import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <br />
                <br />
                <br />
                <SearchBar />
                <br />
                <div className="container">
                    <WeatherList />
                </div>
                <br />
            </div>
        );
    }
}

export default App;
