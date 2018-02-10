import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temperatures = [];
    const pressures = [];
    const humidities = [];

    cityData.list.map((data) => {
        temperatures.push(data.main.temp);
        pressures.push(data.main.pressure);
        humidities.push(data.main.humidity);
    });

    return(
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temperatures}/>
        </td>
        <td>
          <Chart data={pressures} color="green"/>
        </td>
        <td>
          <Chart data={humidities} color="orange"/>
        </td>
      </tr>
    );
  }

  render() {
    console.log(this.props);
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
