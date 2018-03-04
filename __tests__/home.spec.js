import React from 'react';
import expect from 'expect';

import { shallow, mount } from 'enzyme';

import { Home } from '../client/js/components/home';

describe('Home component', () => {
    it('Renders and says hello world', () => {
        const welcome = shallow(<Home />);
        expect(welcome.find('div').text()).toEqual('Hello World');
    })
})
