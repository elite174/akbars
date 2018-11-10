import React from 'react';
import './dashboard.css';
import Menu from '../Menu';
import { observer, inject } from 'mobx-react';
import { PAGES } from '../../store';
import Stat from '../../pages/Stat';
import Competitors from '../../pages/Competitors';
import Advices from '../../pages/Advices';
import Map from '../../pages/Map';

@inject('store')
@observer
class Dashboard extends React.Component {
    render() {
        const { store } = this.props;
        return <div className='dashboard'>
            <Menu />
            <div className='dashboard__content'>
                {store.page === PAGES.stat && <Stat />}
                {store.page === PAGES.map && <Map />}
                {store.page === PAGES.competitors && <Competitors />}
                {store.page === PAGES.advices && <Advices />}
            </div>
        </div>
    }
}

export default Dashboard;