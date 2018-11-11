import React from 'react';
import './map.css';
import Filter from './Filter';

class Map extends React.Component {

    state = {
        data: null
    }

    componentDidMount() {
        this.myMap === undefined && window.ymaps.ready(this.initMap)
    }

    initMap = () => {
        let lat, long;
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            this.myMap = new window.ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [lat, long],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 12
            });
            fetch('http://10.116.119.103:8080/company')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data }, this.addPoints);
                })
        });

    }

    applyFilter = (filterValues = {
        commonFlow: 0,
        bill: 0,
        comp_count: 0,
        distance: 0,
        bClass: ''
    }) => this.addPoints(this.state.data.filter(item => {
        return item.bill >= filterValues.bill &&
            item.commonFlow >= filterValues.commonFlow &&
            item.comp_count >= filterValues.comp_count &&
            item.distance >= filterValues.distance;

    }))

    addPoints = (data = this.state.data) => {
        console.log(data);
        this.myMap.geoObjects.removeAll()
        for (let point of data) {
            let coords = point.gps.split(',')
            this.myMap.geoObjects.add(new window.ymaps.GeoObject({
                // Описываем геометрию типа "Ломаная линия".
                geometry: {
                    type: "Point",
                    coordinates: [Number(coords[0]), Number(coords[1])]
                },
                // Описываем данные геообъекта.
                properties: {
                    hintContent: point.address
                }
            }));
        }
    }

    render() {
        return <div className='map'>
            <div className='map__container' id='map'></div>
            <div className='map__filter'>
                <Filter applyFilter={this.applyFilter} data={this.state.data} />
            </div>
        </div>
    }
}

export default Map;