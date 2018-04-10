import React from 'react';
import expect from 'expect';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { shallow, mount } from 'enzyme';

import { Example } from '../client/js/components/example';

const EXAMPLE_PORTFOLIO_ENDPOINT = '/api/example'

describe('App components', () => {
    let mock, props
    beforeEach(() => {
        mock = new MockAdapter(axios)
        mock.onGet(EXAMPLE_PORTFOLIO_ENDPOINT + '?id=1').reply(200,
            { portfolio: makeMockPortfolio(3) })

        props = {
            match: { params: { id: '1' }}
        }
    })

    afterEach(() => {
        mock.reset()
    })

    it('Renders', () => {
        expect(shallow(<Example {...props}/>).text()).toEqual("Hello World")
    })

    function makeMockPortfolio(amountOfSections) {
        let arrayOfSections = []

        for (let i = 0; i < amountOfSections; i += 1) {
            arrayOfSections.push({
                name: "hello",
                snippet: "what up",
                summary: ["hello", "is it me", "you're looking for"]
            })
        }

        return arrayOfSections
    }
})
