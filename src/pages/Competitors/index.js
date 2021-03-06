import React from 'react';
import './competitors.css';
import Icon from '../../elements/Icon';
import { combineMods } from '../../utils';

class Competitors extends React.Component {
    state = {
        competitors: []
    }

    fetchCompetitors = () => {
        fetch('http://10.116.119.103:8080/company')
            .then(res => res.json())
            .then(competitors => {
                console.log(competitors);
                this.setState({ competitors })
            });
    }

    componentDidMount() {
        this.fetchCompetitors();
    }

    render() {
        return <div className={combineMods('competitors', { empty: this.state.competitors.length == 0 })}>
            {this.state.competitors.length === 0 && <div className='msg'>Нет элементов для отображения</div>}
            {this.state.competitors.map(comp => {
                return <div className='comp shadow' key={comp.id}>
                    <div className='comp__logo-container'>
                        <div className='comp__logo' style={comp.urlLogo !== '' ? { backgroundImage: `url(${comp.urlLogo})` } : {}} ></div>
                    </div>
                    <div className='comp__info'>
                        <div className='comp__name'>{comp.name}</div>
                        <div className='comp__business'>{comp.business}</div>
                        <div className='comp__address'>{comp.address}</div>
                    </div>
                    <div className='comp__link'>
                        Сайт
                        <Icon name='arrow-forward' />
                    </div>
                </div>
            })}
        </div>
    }
}

export default Competitors;