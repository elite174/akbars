import React from 'react';
import './advices.css';
import Icon from '../../elements/Icon';


class Advices extends React.Component {
    state = {
        types: [
            {
                id: 1,
                type: 'map',
                advices: [
                    {
                        text: "askfnqeofn",
                        id: 1
                    }
                ]
            },
            {
                id: 2,
                type: 'map',
                advices: [
                    {
                        text: "askfnqeofn",
                        id: 1
                    }
                ]
            },
            {
                id: 3,
                type: 'map',
                advices: [
                    {
                        text: "askfnqeofn",
                        id: 1
                    }
                ]
            },

        ]
    }

    fetchCompetitors = () => {
        fetch('http://10.116.119.103:8080/recommendation')
            .then(res => res.json())
            .then(competitors => {
                console.log(competitors);
                this.setState({ types:competitors })
            });
    }

    removeTip = (id, textId) => {
        let newTips = [], newT;
        for (let t of this.state.types) {
            if (t.id !== id) {
                newTips.push(t);
            } else {
                newT = t;
                newT.advices = newT.advices.filter(a => a.id !== textId);
                newTips.push(newT);
            }
        }
        this.setState({ types: newTips });
    }

    componentDidMount() {
        this.fetchCompetitors();
    }

    render() {
        return <div className='advices'>
            {this.state.types.map(a => {
                return <div className='tip' key={a.id}>
                    <Icon name={a.type} mods={{ size: 'huge' }} />
                    {a.advices.map(adv => {
                        return <div className='text' key={adv.id}>
                            <div className='text__content'>{adv.text}</div>
                            <div className='text__button' onClick={() => this.removeTip(a.id, adv.id)}>
                                Удалить
                            </div>
                        </div>
                    })}
                    {a.advices.length === 0 && <div className='tip__ok'>
                        <Icon name='happy' /> Советов нет
                    </div>}
                </div>
            })}
        </div>
    }
}

export default Advices;