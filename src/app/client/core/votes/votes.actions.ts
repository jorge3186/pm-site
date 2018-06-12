/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/12/2018 09:44:55
 * file: src/app/client/core/votes/votes.actions.ts
 * ---------------------------------------------------------
 */

 /**
  * @type {enum}
  * @name VoteActions
  * 
  * Available Vote Actions
  */
export enum VoteActions {
    DOWN_VOTE = '@@vote/DOWN_VOTE',
    UP_VOTE = '@@vote/UP_VOTE',
    INDIFFERENT = '@@vote/INDIFFERENT'
}

/**
 * @type {Function}
 * 
 * Helper function to determine the type
 * of Action that should be applied.
 * 
 * @param voteType 
 */
function determineType(voteType: number): VoteActions {
    if (!voteType) {
        return VoteActions.INDIFFERENT;
    } else if (voteType > 0) {
        return VoteActions.UP_VOTE;
    } else {
        return VoteActions.DOWN_VOTE;
    }
}

/**
 * @type {interface}
 * 
 * Action interface that 
 * will be given to the reducer
 */
export interface VoteAction {
    type: string;
    language: string;
}

/**
 * @type {Function}
 * @name VoteAction
 * 
 * @param lang 
 * @param voteType 
 */
export function vote(lang: string, voteType: number): VoteAction {
    return {
        type: determineType(voteType),
        language: lang ? lang.toUpperCase() : ''
    };
};
