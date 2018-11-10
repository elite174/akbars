import React from 'react';
import './icon.css';
import { EMPTY_OBJECT } from '../../constants';
import { combineMods } from '../../utils';

const Icon = ({ name, material = false, mods = EMPTY_OBJECT }) => {
    return <div className={combineMods('icon', mods)}>
        <ion-icon name={`${material ? 'md' : 'ios'}-${name}`} />
    </div>
}

export default Icon;