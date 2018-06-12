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
import { StoreState } from '../../core/store/store';
import { VoteAction } from '../../core/votes/votes.actions';
import vote from '../../core/votes/votes.actions';

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
 * @type {React.Component}
 * @name AppComponent
 * 
 * The React Component that will be connected with 
 * the AppStore
 */
class AppComponent extends React.Component<AppProps> {

    constructor(props: AppProps) {
        super(props);
    }

    /**
     * Upon Clicking an Up or Down Vote
     * button, props.changeVote will be triggered
     * and send the action to the AppStore.
     * 
     * @param lang 
     * @param voteType 
     */
    public handleVote(lang: string, voteType: number) {
        this.props.changeVote(lang, voteType);
    }

    render() {
        let languages: React.ReactElement<any>[] = [];
        Object.keys(this.props.votes).forEach(lng => {
            languages.push(
                <li key={lng}>
                    <h3>{lng}</h3>
                    <p>Votes: {this.props.votes[lng]}</p>
                    <button className="button small primary margin-right-1" onClick={() => this.handleVote(lng, 1)}>Up Vote</button>
                    <button className="button small alert" onClick={() => this.handleVote(lng, -1)}>Down Vote</button>
                </li>
            );
        });

        return (
            <div>
                <ul>
                    {languages}
                </ul>
            </div>
        );
    }

}

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
    (dispatch: Dispatch<VoteAction>) => {
        return {
            changeVote: (lang: string, voteType: number) => dispatch(vote(lang, voteType))
        }
    })
    
    // Connected React Component
    (AppComponent);

export default App;