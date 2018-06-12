/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/12/2018 10:34:19
 * file: src/app/client/core/store/root.reducer.ts
 * ---------------------------------------------------------
 */
import { combineReducers } from 'redux';

import { StoreState } from './store';
import VotesReducer from '../votes/votes.reducer';

/**
 * @type {const}
 * @name RootReducer
 * 
 * Combination Reducer that will be passed
 * to the Redux Store
 */
const RootReducer = combineReducers<StoreState>({
    votes: VotesReducer
});
export default RootReducer;
