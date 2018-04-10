import React from 'react';
import expect from 'expect';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { shallow, mount } from 'enzyme';

import { Portfolio } from '../client/js/components/Portfolio';

const PORTFOLIO_API_ENDPOINT = '/api/portfolio'

describe('App components', () => {
    let mock
    beforeEach(() => {
        mock = new MockAdapter(axios)
        mock.onGet(PORTFOLIO_API_ENDPOINT).reply(200, { portfolio: makeMockPortfolio(3) })
    })

    afterEach(() => {
        mock.reset()
    })

    it('Renders', () => {
        expect(shallow(<Portfolio/>)).toBeDefined()
    })

    it('Mounting component, should call about api', () => {
        mount(<Portfolio/>)
        expect(mock.handlers.get.length).toBe(1)
    })

    it('Should expect x amount of sections', () => {
        const component = shallow(<Portfolio />)
        component.setState({
            portfolio: makeMockPortfolio(3)
        })

        expect(component.find('.blog-content').length).toBe(3)
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

