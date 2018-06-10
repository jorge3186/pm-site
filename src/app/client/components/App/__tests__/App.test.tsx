/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 12/10/2018 01:06:45
 * file: src/app/client/components/App/__tests__/App.test.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '../App';

describe('<App />', () => {

    it('should display welcome message', () => {
        const component: ShallowWrapper = shallow(<App />);
        expect(component.find('h3').first().text()).toEqual('Hello, World');
    });

});
