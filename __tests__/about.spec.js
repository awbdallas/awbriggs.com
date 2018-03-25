import React from 'react';
import expect from 'expect';

import { shallow } from 'enzyme';

import { About } from '../client/js/components/about';


describe('App components', () => {
    it('Renders and says hello world', () => {
        expect(shallow(<About/>)).toBeDefined()
    })
})
