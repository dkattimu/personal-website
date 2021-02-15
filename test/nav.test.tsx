import React from 'react';
import ThemeNavItem from '../components/theme-nav-item';
import { shallow, mount } from 'enzyme';

import Nav from '../components/nav'

describe('Theme Nav Item works', () => {
  const testButtonDescr = 'Toggle Ligh/Dark';
  let state = 'light';
  const mockCallBack = jest.fn(() => {
    console.log('I have been called on toggle button');
    state = state == 'light' ? 'dark' : 'light';

  });
  const wrapper = mount(
    <ThemeNavItem descr={testButtonDescr} data-test = "themeToggle" 
    themeToggleHandler={mockCallBack} />,
  );

  it('click event changes state', () => {
    wrapper.find('[data-test="themeToggle"]').simulate('click');
    expect(mockCallBack).toBeCalled()
    expect(state).toEqual("dark");
    console.log(wrapper.debug())
  });
});

//Test on narrow view port i.e. less than 760 px
describe('Tests for nav interactivity when view-port is narrow', ()=>{
    let wrapperContBarHomeAlways= mount(<Nav alwaysShowHome={true} continuousNavBar={true}/>)
    let wrapperContBar= mount(<Nav alwaysShowHome={false} continuousNavBar={true}/>)
    
    let wrapper= mount(<Nav alwaysShowHome={false} continuousNavBar={false}/>)
    
    let wrapperHomeAlways= mount(<Nav alwaysShowHome={true} continuousNavBar={false}/>)
    //helper function to resize component window
    const [SMALL_WIDTH, LARGE_WIDTH] =[760, 900]
    const resizeWindow = (width=SMALL_WIDTH) =>{
        var window = {...window, innerWidth:width}
    }
    

    it('only shows the faBar item and appropriate toggleTheme', ()=>{

        let disps = [wrapper, wrapperContBar]
        resizeWindow();
        disps.forEach(mounted =>{
            const fsIcon = mounted.find('[data-test="toggleHiddenNav"]')
            expect(fsIcon).toBeTruthy()
            const toggleBtn = mounted.find('[data-test="themeToggleVisibleOnNarrow"]') 
            expect(toggleBtn).toBeTruthy()
            const toggleBtn1 = mounted.find('[data-test="themeToggleVisibleOnNarrow"]') 
            expect(toggleBtn).toBeTruthy()


        })


    })
    
})