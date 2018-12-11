import React from 'react';
import PropTypes from 'prop-types';
import ForescastItem from './ForestcastItem';
import './styles.css';

const renderForecastItemDays = (ForescastData) => {

    return ForescastData.map(forescast =>
        (
            (<ForescastItem
                key={`${forescast.weekDay}${forescast.hour}`}
                weekDay={forescast.weekDay}
                hour={forescast.hour}
                data={forescast.data}>
            </ForescastItem>)
        )
    )
}

const renderProgress = () => {
    return (<h3>Cargando pronóstico extendido...</h3>);
}

const ForescastExtended = ({ city, forecastData }) => (

    <div >
        <h2 className="forecast-title ">
            {`Pronóstico extendido de ${city}`}
        </h2>
        {
            forecastData ?
                renderForecastItemDays(forecastData) :
                renderProgress()
        }
    </div>
);

ForescastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}
export default ForescastExtended;