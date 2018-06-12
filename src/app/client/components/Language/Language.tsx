/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/12/2018 12:55:52
 * file: src/app/client/components/Language/Language.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';

interface LangProps {
    name: string;
    votes: number;
    changeVote: (lng: string, voteType: number) => void;
}

export default class Language extends React.Component<LangProps> {

    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>Votes: {this.props.votes}</p>
                <button className="button small primary margin-right-1" 
                        onClick={() => this.props.changeVote(this.props.name, 1)}>Up Vote</button>
                    <button className="button small alert" 
                        onClick={() => this.props.changeVote(this.props.name, -1)}>Down Vote</button>
            </div>
            
        );
    }
}
