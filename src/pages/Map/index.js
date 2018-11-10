import React from 'react';
import './map.css';

class Map extends React.Component {
    componentDidMount() {
        window.ymaps.ready(this.initMap)
    }

    initMap = () => {
        var myMap = new window.ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
    }

    render() {
        return <div className='map'>
            <div className='map__container' id='map'></div>
            <div className='map__filter'></div>
        </div>
    }
}

export default Map;