import React from 'react';
import expect from 'expect';

import { shallow } from 'enzyme';

import { About } from '../src/js/components/about';


describe('App components', () => {
    it('Renders and says hello world', () => {
        const about = shallow(<About />)
        expect(about.find('div').text()).toEqual('Hello About')
    })
})
