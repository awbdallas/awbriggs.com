import React from 'react';
import expect from 'expect';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { shallow, mount } from 'enzyme';

import { About } from '../client/js/components/about';

const ABOUT_API_ENDPOINT = '/api/about'

describe('App components', () => {
    let mock
    beforeEach(() => {
        mock = new MockAdapter(axios)
        mock.onGet('/api/about').reply(200, { about: makeMockAbout(3) })
    })

    afterEach(() => {
        mock.reset()
    })

    it('Renders', () => {
        expect(shallow(<About/>)).toBeDefined()
    })

    it('Mounting component, should call about api', () => {
        mount(<About/>)
        expect(mock.handlers.get.length).toBe(1)
    })

    it('Should exptect x headers and content based on amount of sections', () => {
        const component = shallow(<About />)
        component.setState({
            aboutInfo: makeMockAbout(3)
        })

        expect(component.find('.about-section-header').length).toBe(3)
        expect(component.find('.about-section-content').length).toBe(3)
    })

    function makeMockAbout(amountOfSections) {
        let arrayOfSections = []

        for (let i = 0; i < amountOfSections; i += 1) {
            arrayOfSections.push({
                section: "Hello",
                content: "Bye",
                projectId: 1
            })
        }

        return arrayOfSections
    }
})
