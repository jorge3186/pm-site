/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/12/2018 09:58:03
 * file: src/app/client/core/votes/votes.reducer.ts
 * ---------------------------------------------------------
 */
import { StoreState, BaseAction } from '../store/store';
import { VoteActions } from './votes.actions';

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
 * @type {Function}
 * @name VotesReducer
 * 
 * Handles all incoming actions that are
 * part of the '@@vote' context.
 * 
 * @param state 
 * @param action 
 * @returns updated state
 */
export default function VotesReducer(state: StoreState = initialState, action: BaseAction<string>): StoreState {
    let votes: any = Object.assign({}, state.votes);
    if (action.payload && !votes[action.payload]) {
        votes[action.payload] = 0;
    }

    if (action.type === VoteActions.UP_VOTE) {
        votes[action.payload] += 1;
    } else if (action.type === VoteActions.DOWN_VOTE) {
        votes[action.payload] -= 1;
    }

    if (votes[action.payload] < 0) {
        votes[action.payload] = 0;
    }

    return { votes: votes };
}
