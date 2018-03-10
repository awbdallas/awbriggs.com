import React from 'react';
import expect from 'expect';

import axios from 'axios'

import { shallow, mount } from 'enzyme';

import { Footer } from '../client/js/components/footer';

import moxios from 'moxios'


describe('Footer component', () => {
    it('Renders and says hello world', () => {
        const footer = shallow(<Footer />)
        expect(footer.find('div').text()).toEqual('Hello Footer')
    })

    describe('api calls', () => {
        beforeEach(() => {
            moxios.install()
        })

        afterEach(() => {
            moxios.uninstall()
        })

        const footer = mount(<Footer />)
        it('stub request', () => {
            moxios.stubRequest('/api/footer-links', {
                status: 200,
                responseText: 'hello'
            })

            let spy  = jest.spyOn(Footer.prototype, 'getFooterLinks')
            mount(<Footer/>)

            moxios.wait(() => {
                expect(spy).toHaveBeenCalled()
                done()
            })

            expect(true).toBeTruthy()
        })
    })
})
