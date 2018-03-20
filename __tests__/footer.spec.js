import React from 'react';
import expect from 'expect';

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';

import { shallow, mount } from 'enzyme';

import { Footer } from '../client/js/components/footer';

const FOOTER_API_ENDPOINT = '/api/footer-link'

describe('Footer component', () => {
    it('Renders', () => {
        expect(shallow(<Footer />)).toBeDefined()
    })

    it('stub request', () => {
        let mock = new MockAdapter(axios)

        mock.onGet(FOOTER_API_ENDPOINT).reply(200, {
            data: 'whatever'
        })

        let spy = jest.spyOn(Footer.prototype, 'getFooterLinks')
        mount(<Footer/>)

        expect(spy).toHaveBeenCalled()
    })

    it('Creates as many tabs as the response gives', () => {
        let mock = new MockAdapter(axios)

        mock.onGet(FOOTER_API_ENDPOINT).reply(200, {
            links: makeMockLinks(3)
        })

        let component = shallow(<Footer />)

        expect(component.find('.footer-link').length).toBe(3)
    })

    function makeMockLinks(amountOfLinks) {
        let arrayOfLinks = []

        for (let i = 0; i < amountOfLinks; i += 1) {
            let holdingObject = {}
            holdingObject[`name-${i}`] = {
                "image": `image-${i},`,
                "link": `link-${i},`
            }
            arrayOfLinks.push(holdingObject)
        }

        return arrayOfLinks
    }
})
