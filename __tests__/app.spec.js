import React from 'react';
import expect from 'expect';

import { shallow, mount } from 'enzyme';

import App from '../src/js/app';


describe('App components', () => {
    it('Renders and says hello world', () => {
        const welcome = shallow(<App />);
        expect(welcome.find('div').text()).toEqual('Hello World');
    })
})
