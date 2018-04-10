import React from 'react';

const Weather = (props) => (
    <div className="weather__info">
        {props.tempData.city && props.tempData.country && 
            <p className="weather__key">Location:
                <span className="weather__value"> {props.tempData.city}, {props.tempData.country}</span>
            </p>
        }
        {props.tempData.temperature && 
            <p className="weather__key"> Temperature:
                <span className="weather__value"> {props.tempData.temperature}</span>
            </p>
        }
        {props.tempData.humidity && 
            <p className="weather__key">Humidity:
                <span className="weather__value"> {props.tempData.humidity}</span>
            </p>
        }
        {props.tempData.description && 
            <p className="weather__key">Conditions:
                <span className="weather__value"> {props.tempData.description}</span>
            </p>
        }
        {props.tempData.error && 
            <p className="weather__error">Error: {props.tempData.error}
            </p>
        }
    </div>
)

export default Weather;