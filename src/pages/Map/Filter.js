import React from 'react';

class Filter extends React.Component {
    state = {
        commonFlow: 33,
        bill: 250,
        comp_count: 15,
        distance: 300
    }

    handleChange = e => this.setState({ [e.target.name]: Number(e.target.value) });

    render() {
        const { data } = this.props;
        return <div className='filter'>
        <div className='caption'>Фильтр</div>
            <div className='filter-item'>
                <div className='filter-item__name'>Клиентопоток</div>
                <input className='filter-item__input' min="33" max="147" type='range' name='commonFlow' onChange={this.handleChange} value={this.state.commonFlow} />
                <div className='filter-item__value'>{this.state.commonFlow}</div>
            </div>
            <div className='filter-item'>
                <div className='filter-item__name'>Средний чек</div>
                <input className='filter-item__input' min="250" max="1900" type='range' name='bill' onChange={this.handleChange} value={this.state.bill} />
                <div className='filter-item__value'>{this.state.bill}</div>
            </div>
            <div className='filter-item'>
                <div className='filter-item__name'>Количество конкурентов</div>
                <input className='filter-item__input' min="15" max="29" type='range' name='comp_count' onChange={this.handleChange} value={this.state.comp_count} />
                <div className='filter-item__value'>{this.state.comp_count}</div>
            </div>
            <div className='filter-item'>
                <div className='filter-item__row'>
                    <div className='filter-item__name'>Расстояние</div>
                    <div className='filter-item__value'>{this.state.distance}</div>
                </div>
                <input className='filter-item__input' min="300" max="3900" type='range' name='distance' onChange={this.handleChange} value={this.state.distance} />
            </div>
            <div className='filter-item__button' onClick={() => this.props.applyFilter(this.state)}>Применить</div>
        </div>
    }
}

export default Filter;