import React from 'react';
import './clientFlow.css';
import Icon from '../../elements/Icon';
import { combineMods } from '../../utils';

class ClientFlow extends React.Component {
    render() {
        return <div className='client-flow'>
            <div className='client-flow__container'>
                <div className={combineMods('client-flow__item', { left: true })}>
                    <p className='client-flow__item__name'>Клиентопоток</p>
                    <p className='client-flow__item__value'>142 чел/час
                    <Icon name='arrow-dropup' material mods={{
                            color: 'green'
                        }} />
                    </p>
                </div>
                <div className={combineMods('client-flow__item', { right: true })}>
                    <p className='client-flow__item__name'>Приход</p>
                    <p className='client-flow__item__value'>32 чел/день
                    <Icon name='arrow-dropdown' material mods={{
                            color: 'red'
                        }} />
                    </p>
                </div>
            </div>
        </div>
    }
}

export default ClientFlow;