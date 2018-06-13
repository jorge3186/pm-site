/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/11/2018 11:20:18
 * file: src/app/client/components/App/App.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreState, BaseAction } from '../../core/store/store';
import { vote } from '../../core/votes/votes.actions';
import Language from '../Language/Language';

/**
 * @type {interface}
 * @name AppProps
 * 
 */
export interface AppProps {
    changeVote: (lang: string, voteType: number) => void;
    votes?: {[key:string]: number};
}

/**
 * @type {React.SFC}
 * @name AppComponent
 * 
 * The React Component that will be connected with 
 * the AppStore
 */
export const AppComponent: React.SFC<AppProps> = ({ changeVote, votes }) => {
    let languages: React.ReactElement<AppProps>[] = [];
    if (votes) {
        Object.keys(votes).forEach(lng => {
            languages.push(
                <li key={lng}>
                    <Language 
                        name={lng} 
                        votes={votes[lng]}
                        changeVote={changeVote} />
                </li>
            );
        });
    }

    return (
        <div>
            <ul>
                {languages}
            </ul>
        </div>
    );
};

/**
 * @type {container}
 * @name App
 * 
 * Create a container and connect the AppComponent to 
 * the AppStore.
 */
const App = connect<StoreState, AppProps>(

    // Map State to Props
    (state: StoreState) => {
        return state.votes
    },

    // Map Dispatch to Props
    (dispatch: Dispatch<BaseAction<string>>) => {
        return {
            changeVote: (lang: string, voteType: number) => dispatch(vote(lang, voteType))
        }
    })
    
    // Connected React Component
    (AppComponent);

export default App;
