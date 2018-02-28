import React from 'react';
import expect from 'expect';

import axios from 'axios'

import { shallow, mount } from 'enzyme';

import { Footer } from '../src/client/js/components/footer';

var moxios = require('moxios')


describe('Footer component', () => {
    it('Renders and says hello world', () => {
        const about = shallow(<Footer />)
        expect(about.find('div').text()).toEqual('Hello Footer')
    })

    describe('Axios calls testing', () =>  {
        beforeEach(() => {
            moxios.install()
        })

        afterEach(() => {
            moxios.uninstall()
        })

        it('Make call on mount for links', () => {
            moxios.stubRequest('/api/footer-links', {
                status: 200,
                response: []
            })

            moxios.wait(50).then(() => {
                console.log("Hello")
            }).catch(() => {
                console.log("Hello")
            })
        })
    })

})
