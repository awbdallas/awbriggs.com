import React from 'react';
import expect from 'expect';

import { shallow, mount } from 'enzyme';

import { Home } from '../client/js/components/home';

describe('Home component', () => {
    it('Renders and says hello world', () => {
        expect(shallow(<Home />)).toBeDefined()
    })
})
