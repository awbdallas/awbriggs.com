import React from 'react';
import expect from 'expect';

import { shallow } from 'enzyme';

import { Footer } from '../src/js/components/footer';


describe('Footer component', () => {
    it('Renders and says hello world', () => {
        const about = shallow(<Footer />)
        expect(about.find('div').text()).toEqual('Hello Footer')
    })
})
