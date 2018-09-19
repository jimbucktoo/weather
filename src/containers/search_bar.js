import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = { term: "" };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    onInputChange(event) {
        this.setState({term: event.target.value});
    };

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    };

    render(){
        console.log(this.state.term);
        return(
            <form onSubmit={this.onFormSubmit} className="input-group searchbar">
                <input placeholder="Get a five-day forecast of your favorite cities" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </span>
            </form> 
        );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather },dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
