/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 12/10/2018 01:06:32
 * file: src/app/client/index.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDom  from 'react-dom';
import * as $ from 'jquery';

import App from './components/App/App';
import Store from './core/store/store';

// Styles Root
import './assets/style.scss';

// Vendor Scripts
import './assets/vendors';

/**
 * Render the App Store using ReactDom
 */
ReactDom.render(
    <Provider store={Store}>
        <App />
    </Provider>, 
    
    document.getElementById('root')
);

// kickoff foundation
($(document) as any).foundation();
