import React from 'react';
import expect from 'expect';

import { shallow } from 'enzyme';

import App from '../src/js/app';

import { Header } from '../src/js/components/header';


describe('App components', () => {
    it('Renders and says hello world', () => {
        const welcome = shallow(<App />);
        expect(welcome.find(Header).length).toBe(1);
    })
})

