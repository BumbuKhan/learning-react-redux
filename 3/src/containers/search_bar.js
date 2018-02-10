import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleInputChage = this.handleInputChage.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {term: ''};
  }

  handleInputChage(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="form-control"
          onChange={this.handleInputChage}
          placeholder="Type the city"
          value={this.state.term}
          type="text"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
