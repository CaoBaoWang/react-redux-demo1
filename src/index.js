import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";


const stateChanger = (state, action) => {
    const initialState = {
        n: 0
    }
    if (state !== undefined) {
        if (action.type === 'add') {
            return {n: state.n + action.payload }
        } else {
            return state
        }
    }

    return initialState
}

const store = createStore(stateChanger)

store.subscribe(render)

render()

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
