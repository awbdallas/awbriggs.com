import React from 'react';
import expect from 'expect';

import { shallow } from 'enzyme';

import { Header } from '../src/js/components/header';


describe('App components', () => {
    it('Two Link', () => {
        const welcome = shallow(<Header />);
        expect(welcome.find('li').length).toBe(2);
    })
})
