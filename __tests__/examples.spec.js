import React from 'react';
import expect from 'expect';

import { shallow } from 'enzyme';

import { Examples } from '../client/js/components/examples';


describe('App components', () => {
    it('Renders and says hello world', () => {
        const about = shallow(<Examples />)
        expect(about.find('div').text()).toEqual('Hello Examples')
    })
})
