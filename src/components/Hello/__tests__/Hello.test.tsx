import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// SUT
import { Hello } from '../Hello';

/**
 * Hello component tests.
 *
 * @covers Hello
 */
describe('Hello component testing', () => {

    /**
     * Hello renders h2 containing "Hello World".
     *
     * @covers Hello.render
     */
    it('should render hello world', () => {
        const wrapper = shallow(<Hello compiler={"yes"} framework={"no"} />);

        expect(wrapper.find('h2').html())
            .toMatch(/Hello World/);
    });

    /**
     * Hello renders correct jsx.
     *
     * @covers Hello.render
     */
    it('should render correct snapshot', () => {
        const wrapper = shallow(
            <div className={'hello'}>
                <h2>Hello World</h2>
            </div>
        );

        expect(wrapper).toMatchSnapshot();
    })
});
