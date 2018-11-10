import React from 'react';
import './stat.css';
import Icon from '../../elements/Icon';
import echarts from 'echarts';

class Stat extends React.Component {
    state = {
        data: {
            current_flow: 0,
            current_income: 0,
            flow: [],
            income: [],
            flow_increase: 0,
            income_increase: 0,
            profiles: [{
                name: 'klava',
                age: '12-25',
                sex: 'yes',
                hobbies: ['food', 'fuck'],
                image: ''
            }]
        }
    }

    fetchData = () => {
        fetch('http://10.116.119.103:8080/statistic')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ data })//, this.setOption)
            })
    }
    setOption = () => {
        var xAxisData = [];
        for (var i = 0; i < 30; i++) {
            xAxisData.push(i + 1 + "/11");
        }
        let option = {
            title: {
                text: 'Клиентопоток/Прибыль (час)'
            },
            legend: {
                data: ['Клиентопоток', 'Прибыль'],
                align: 'left'
            },
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: [{
                name: 'Клиентопоток',
                type: 'bar',
                data: this.state.flow.map(item => item.value),
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: 'Прибыль',
                type: 'bar',
                data: this.state.income.map(item => item.value),
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        this.chart.setOption(option);
    }
    componentDidMount() {
        this.fetchData();
        this.chart = echarts.init(this.container);
        this.setOption();
    }
    render() {
        return <div className='stat'>
            <div className='caption'>Метрики</div>
            <div className='counters'>
                <div className='counter'>
                    <div className='counter__content'>
                        <div className='counter__val'>{this.state.data.current_flow} <Icon name='arrow-dropup' material /> ({this.state.data.flow_increase.toFixed(2)}%)</div>
                        <div className='counter__unit'>Клиентопоток</div>
                    </div>
                </div>
                <div className='counter'>
                    <div className='counter__content'>
                        <div className='counter__val'>{this.state.data.current_income} <Icon name='arrow-dropdown' material /> ({this.state.data.income_increase.toFixed(2)}%)</div>
                        <div className='counter__unit'>Прибыть</div>
                    </div>
                </div>
                <div className='counter'>
                    <div className='counter__content'>
                        <div className='counter__val'>123</div>
                        <div className='counter__unit'>чел блять</div>
                    </div>
                </div>
            </div>
            <div className='caption'>Типичные пользователи</div>
            <div className='profiles'>
                {this.state.data.profiles.map(p => {
                    return <div className='profile'>
                        <div className='profile__image' style={{ backgroundImage: `url(${p.image})` }}></div>
                        <div className='profile__info'>
                            <div className='profile__prop'>Имя</div>
                            <div className='profile__val'>{p.name}</div>
                        </div>
                        <div className='profile__info'>
                            <div className='profile__prop'>Возраст</div>
                            <div className='profile__val'>{p.age} лет</div>
                        </div>
                        <div className='profile__info'>
                            <div className='profile__prop'>Пол</div>
                            <div className='profile__val'>{p.sex}</div>
                        </div>
                        <div className='profile__info'>
                            <div className='profile__prop'>Хобби</div>
                            <div className='profile__val'>{p.hobbies.join(', ')}</div>
                        </div>
                    </div>
                })}
            </div>
            <div className='caption'>Показатели</div>
            <div className='chart-container' ref={container => this.container = container}></div>
        </div>
    }
}

export default Stat;