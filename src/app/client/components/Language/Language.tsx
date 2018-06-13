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

/**
 * Language Component Props
 */
export interface LangProps {
    name: string;
    votes: number;
    changeVote: (lng: string, voteType: number) => void;
}

/**
 * @type {React.SFC}
 * @name Language
 * 
 * Language SFC. 
 * 
 * @param name
 * @param votes
 * @param changeVote 
 */
const Language: React.SFC<LangProps> = ({ name, votes, changeVote }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Votes: {votes}</p>
            <button className="button small primary margin-right-1" 
                    onClick={() => changeVote(name, 1)}>Up Vote</button>
                <button className="button small alert" 
                    onClick={() => changeVote(name, -1)}>Down Vote</button>
        </div>
    );
};

export default Language;
