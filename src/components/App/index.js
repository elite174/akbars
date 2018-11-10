import React from 'react';
import {Provider} from 'mobx-react';
import store from '../../store';
import Icon from '../../elements/Icon';

export default class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Icon name='battery-dead'/>
                </div>
            </Provider>
        )
    }
}