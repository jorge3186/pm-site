/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/12/2018 04:08:04
 * file: src/app/client/core/votes/__tests__/votes.actions.test.ts
 * ---------------------------------------------------------
 */
import { VoteActions, vote } from '../votes.actions';
import { BaseAction } from '../../store/store';

describe('Vote Action', () => {

    it('returns a down vote when negative number is passed', () => {
        let action: BaseAction<string> = vote('Java', -1);
        expect(action.type).toEqual(VoteActions.DOWN_VOTE);
    });

    it('returns an up vote when positive number is passed', () => {
        let action: BaseAction<string> = vote('Java', 1);
        expect(action.type).toEqual(VoteActions.UP_VOTE);
    });

    it('return indifferent when number is null', () => {
        let action: BaseAction<string> = vote('Java', null);
        expect(action.type).toEqual(VoteActions.INDIFFERENT);
    });

    it('returns the language in uppercase', () => {
        let action: BaseAction<string> = vote('java', 1);
        expect(action.payload).toEqual('JAVA');
    });

    it('returns an empty string if no language is present', () => {
        let action: BaseAction<string> = vote(null, 1);
        expect(action.payload).toEqual('');
        expect(action.type).toEqual(VoteActions.UP_VOTE);
    });

});
