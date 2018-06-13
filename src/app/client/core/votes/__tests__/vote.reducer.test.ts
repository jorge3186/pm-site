/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/12/2018 04:15:00
 * file: src/app/client/core/votes/__tests__/vote.reducer.test.ts
 * ---------------------------------------------------------
 */
import VoteReducer, { initialState } from '../votes.reducer';
import { VoteActions, vote } from '../votes.actions';
import { StoreState } from '../../store/store';

describe('Vote Reducer', () => {

    it('provides a default state when none is given', () => {
        let state: StoreState = VoteReducer(undefined, 
            { type: VoteActions.UP_VOTE, payload: 'JAVA' });
        expect(state.votes).toBeDefined();
        expect(state.votes).not.toEqual(initialState);
        expect(state.votes.JAVA).toEqual(4);
    });

    it('increments with UP_VOTE', () => {
        let state: StoreState = {
            votes: {
                JAVA: 3,
                TS: 1
            }
        };
        let updated: StoreState = VoteReducer(state, 
            { type: VoteActions.UP_VOTE, payload: 'JAVA' });
        expect(state).not.toEqual(updated);
        expect(updated.votes.JAVA).toEqual(4);
    });

    it('decrements with DOWN_VOTE', () => {
        let state: StoreState = {
            votes: {
                TS: 4
            }
        };
        let updated: StoreState = VoteReducer(state, 
            { type: VoteActions.DOWN_VOTE, payload: 'TS' });
        expect(state).not.toEqual(updated);
        expect(updated.votes.TS).toEqual(3);
    });

    it('does nothing with INDIFFERENT', () => {
        let state: StoreState = {
            votes: {
                TS: 4
            }
        };
        let updated: StoreState = VoteReducer(state, 
            { type: VoteActions.INDIFFERENT, payload: 'TS' });
        expect(state).toEqual(updated);
        expect(updated.votes.TS).toEqual(4);
    });

    it('resets negative numbers to 0', () => {
        let state: StoreState = {
            votes: {
                TS: 0
            }
        };
        let updated: StoreState = VoteReducer(state, 
            { type: VoteActions.DOWN_VOTE, payload: 'TS' });
        expect(state).toEqual(updated);
        expect(updated.votes.TS).toEqual(0);
    });

});
