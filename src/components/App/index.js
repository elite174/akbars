import React from 'react';
import { Provider } from 'mobx-react';
import store from '../../store';
import Icon from '../../elements/Icon';
import Dashboard from '../Dashboard';

export default class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Dashboard />
            </Provider>
        )
    }
}