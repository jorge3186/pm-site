/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/12/2018 01:34:36
 * file: src/app/client/components/Language/__tests__/Language.test.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Language, { LangProps } from '../Language';
import { vote } from '../../../core/votes/votes.actions';

describe('<Language />', () => {

    var props: LangProps;
    var component: ShallowWrapper;

    beforeEach(() => {
        props = {
            changeVote: jest.fn(),
            name: 'Java',
            votes: 3
        };
        component = shallow(<Language {...props} />);
    });

    it('should display a header', () => {
        expect(component.find('h3').at(0).text()).toEqual('Java');
    });

    it('should have a Votes value', () => {
        expect(component.find('p').at(0).text()).toEqual('Votes: 3');
    });

    it('should contain 2 buttons', () => {
        expect(component.find('button').length).toEqual(2);
        expect(component.find('button').at(0).text()).toEqual('Up Vote');
        expect(component.find('button').at(1).text()).toEqual('Down Vote');
    });

    it('should trigger props.changeVote', () => {
        component.find('button').at(0).simulate('click');
        expect(props.changeVote).toHaveBeenCalledWith('Java', 1);

        component.find('button').at(1).simulate('click');
        expect(props.changeVote).toHaveBeenCalledWith('Java', -1);
    });

});
