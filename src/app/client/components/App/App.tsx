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

export interface AppProps {}
export interface AppState {}

export default class AppComponent extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Hello, World</h3>
                <button className={'button primary'}>Foundation Button</button>
                <div className={'callout alert'}>
                    <p>Callout example</p>
                </div>
            </div>
        );
    }

}
