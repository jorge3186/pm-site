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
import * as ReactDom  from 'react-dom';

import App from './components/App/App'

// Styles Root
import './assets/style.scss';

ReactDom.render(<App />, document.getElementById('root'));
