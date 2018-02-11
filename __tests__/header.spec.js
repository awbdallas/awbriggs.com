import React from 'react';
import expect from 'expect';

import { shallow } from 'enzyme';

import { Header } from '../src/js/components/header';

const tabs = [
    {
        name: 'Home',
        component: Header
    },
    {
        name: 'About',
        component: Header
    },
    {
        name: 'Examples',
        component: Header
    }
]

describe('App components', () => {
    it('Two Link', () => {
        const welcome = shallow(<Header tabs={tabs} />);
        expect(welcome.find('li').length).toBe(3);
    })
})
