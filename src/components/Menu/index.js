import React from 'react';
import './menu.css';
import Icon from '../../elements/Icon';
import { inject } from 'mobx-react';
import { PAGES } from '../../store';
import { combineMods } from '../../utils';
import Logo from '../../elements/Logo';

const Menu = inject('store')(({ store }) => {
    return <div className='menu'>
        <div className='menu__header'>
            <div style={{ position: 'absolute', top: 25, left: 22 }}>
                <Logo height='90' width='220' color='var(--blue)' />
            </div>
        </div>
        <div className={combineMods('menu__item', { active: store.page === PAGES.stat })} onClick={() => store.changePage(PAGES.stat)}><Icon name='analytics' />Статистика</div>
        <div className={combineMods('menu__item', { active: store.page === PAGES.advices })} onClick={() => store.changePage(PAGES.advices)}><Icon name='flash' />Советы</div>
        <div className={combineMods('menu__item', { active: store.page === PAGES.competitors })} onClick={() => store.changePage(PAGES.competitors)}><Icon name='contacts' />Конкуренты</div>
        <div className={combineMods('menu__item', { active: store.page === PAGES.map })} onClick={() => store.changePage(PAGES.map)}><Icon name='navigate' />Карта</div>
    </div>
})

export default Menu;