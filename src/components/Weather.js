import React from 'react';

class Weather extends React.Component {
    render () {
        return (
            <div>
                {this.props.tempData.city && this.props.tempData.country && <p>Location: {this.props.tempData.city}, {this.props.tempData.country}</p>}
                {this.props.tempData.temperature && <p>Temperature: {this.props.tempData.temperature}</p>}
                {this.props.tempData.humidity && <p>Humidity: {this.props.tempData.humidity}</p>}
                {this.props.tempData.description && <p>Conditions: {this.props.tempData.description}</p>}
                {this.props.tempData.error && <p>Error: {this.props.tempData.error}</p>}
            </div>
        );
    }
}

export default Weather;