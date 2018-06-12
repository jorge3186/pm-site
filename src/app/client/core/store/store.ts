/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/12/2018 10:27:22
 * file: src/app/client/core/store/store.state.ts
 * ---------------------------------------------------------
 */
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './root.reducer';

/**
 * @type {interface}
 * 
 * Store State interface
 */
 export interface StoreState {
    readonly votes: any;
}

/**
 * @type {const}
 * 
 * Our Initial State of the Store.
 */
export const initialState: StoreState = {
    votes: {
        JAVA: 3,
        TS: 5,
        CS: 2
    }
};

/**
 * @type {Store}
 * @name AppStore
 * 
 * The App Store that will be sent 
 * to the Provider Component
 */
const AppStore = createStore(RootReducer, applyMiddleware(thunkMiddleware));
export default AppStore;
