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
import { AppComponent, AppProps } from '../App';

describe('<App />', () => {

    it('should contain <Language /> nodes as children', () => {
        const props: AppProps = {
            changeVote: jest.fn(),
            votes: {
                JAVA: 3,
                TS: 2,
                CS: 4
            }
        };
        const component: ShallowWrapper = shallow(<AppComponent {...props} />);
        expect(component.find('Language').length).toEqual(3);
    });

    it('should be empty if no props.votes has been given', () => {
        const component: ShallowWrapper = shallow(<AppComponent changeVote={jest.fn()} />);
        expect(component.find('Language').length).toEqual(0);
    });

    it('should call the props.changeVote function', () => {
        const props: AppProps = {
            changeVote: jest.fn(),
            votes: {
                JAVA: 3,
                TS: 2,
                CS: 4
            }
        };
        const component: ShallowWrapper = shallow(<AppComponent {...props} />);
        component.find('Language').at(0).dive().find('button').at(0).simulate('click');
        expect(props.changeVote).toHaveBeenCalled();
    });

});
