import React from 'react';
import expect from 'expect';

import axios from 'axios'

import { shallow, mount } from 'enzyme';

import { Footer } from '../client/js/components/footer';

var moxios = require('moxios')


describe('Footer component', () => {
    it('Renders and says hello world', () => {
        const about = shallow(<Footer />)
        expect(about.find('div').text()).toEqual('Hello Footer')
    })
})
