import React from 'react';
import expect from 'expect';

import { shallow } from 'enzyme';

import { Portfolio } from '../client/js/components/portfolio';


describe('App components', () => {
    it('Renders and says hello world', () => {
        const about = shallow(<Portfolio />)
        expect(about.find('div').text()).toEqual('Hello Portfolio')
    })
})
