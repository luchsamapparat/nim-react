import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NimGame } from './nim/NimGame';
import { NimState, nimReducer } from './nim/state/reducer';
import { registerServiceWorker } from './registerServiceWorker';

const initialState: NimState = undefined as any;

const store = createStore<NimState>(
    nimReducer,
    initialState,
    // tslint:disable-next-line:no-string-literal
    window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
);

ReactDOM.render(
    <Provider store={store}>
        <NimGame />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
