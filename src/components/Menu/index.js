import React from 'react';
import './menu.css';
import Icon from '../../elements/Icon';
import { inject } from 'mobx-react';
import { PAGES } from '../../store';
import { combineMods } from '../../utils';

const Menu = inject('store')(({ store }) => {
    return <div className='menu'>
        <div className='menu__header'>Dashboard</div>
        <div className={combineMods('menu__item', { active: store.page === PAGES.stat })} onClick={() => store.changePage(PAGES.stat)}><Icon name='analytics' />Статистика</div>
        <div className={combineMods('menu__item', { active: store.page === PAGES.advices })} onClick={() => store.changePage(PAGES.advices)}><Icon name='flash' />Советы</div>
        <div className={combineMods('menu__item', { active: store.page === PAGES.competitors })} onClick={() => store.changePage(PAGES.competitors)}><Icon name='contacts' />Конкуренты</div>
        <div className={combineMods('menu__item', { active: store.page === PAGES.map })} onClick={() => store.changePage(PAGES.map)}><Icon name='navigate' />Карта</div>
    </div>
})

export default Menu;