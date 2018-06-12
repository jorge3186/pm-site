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
import { StoreState, initialState } from '../store/store';
import { VoteAction, VoteActions } from './votes.actions';

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
export default function VotesReducer(state: StoreState = initialState, action: VoteAction): StoreState {
    let votes = Object.assign({}, state ? state.votes : {});

    if (action.type === VoteActions.UP_VOTE) {
        votes[action.language] += 1;
    } else if (action.type === VoteActions.DOWN_VOTE) {
        votes[action.language] -= 1;
    }

    if (votes[action.language] < 0) {
        votes[action.language] = 0;
    }

    return { votes: votes };
}