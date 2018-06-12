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
import { VoteActions } from '../votes.actions';
import { StoreState } from '../../store/store';

describe('Vote Reducer', () => {

    it('provides a default state when none is given', () => {
        let state: StoreState = VoteReducer(undefined, { type: VoteActions.UP_VOTE, language: 'JAVA' });
        expect(state.votes).toBeDefined();
        expect(state.votes).not.toEqual(initialState);
        expect(state.votes.JAVA).toEqual(4);
    });

});
