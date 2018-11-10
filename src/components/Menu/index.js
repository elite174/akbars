import React from 'react';
import './menu.css';
import Icon from '../../elements/Icon';
import { inject } from 'mobx-react';
import { PAGES } from '../../store';

const Menu = inject('store')(({ store }) => {
    return <div className='menu'>
        <div className='menu__header'>Dashboard</div>
        <div className='menu__item' onClick={() => store.changePage(PAGES.stat)}><Icon name='analytics' />Статистика</div>
        <div className='menu__item' onClick={() => store.changePage(PAGES.advices)}><Icon name='flash' />Советы</div>
        <div className='menu__item' onClick={() => store.changePage(PAGES.competitors)}><Icon name='contacts' />Конкуренты</div>
        <div className='menu__item' onClick={() => store.changePage(PAGES.map)}><Icon name='navigate' />Карта</div>
    </div>
})

export default Menu;