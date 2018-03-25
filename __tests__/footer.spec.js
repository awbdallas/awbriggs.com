import React from 'react';
import expect from 'expect';

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';

import { shallow, mount } from 'enzyme';

import { Footer } from '../client/js/components/footer';

const FOOTER_API_ENDPOINT = '/api/footer-links'

describe('Footer component', () => {
    let mock
    beforeEach(() => {
        mock = new MockAdapter(axios)
        mock.onGet(FOOTER_API_ENDPOINT).reply(200, makeMockLinks(3))
    })

    it('Renders', () => {
        expect(shallow(<Footer />)).toBeDefined()
    })

    it('stub request', () => {
        let spy = jest.spyOn(Footer.prototype, 'getFooterLinks')
        mount(<Footer />)

        expect(spy).toHaveBeenCalled()
        spy.mockRestore()
    })

    it('Creates as many tabs as the response gives', () => {
        let component = mount(<Footer />)

        component.setState({
            footerLinks: makeMockLinks(3)
        })

        expect(component.find('.footer-link').length).toBe(3)

    })

    function makeMockLinks(amountOfLinks) {
        let arrayOfLinks = []

        for (let i = 0; i < amountOfLinks; i += 1) {
            let holdingObject = {
                Name: `name-${i},`,
                Image: `image-${i},`,
                Link: `link-${i},`
            }
            arrayOfLinks.push(holdingObject)
        }

        return arrayOfLinks
    }
})
