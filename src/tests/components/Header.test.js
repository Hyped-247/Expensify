import React from 'react';
import {shallow} from "enzyme";
import {Header} from "../../components/Header";

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = just.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('find').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});














