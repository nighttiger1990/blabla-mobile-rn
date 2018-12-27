import React from 'react'
import renderer from 'react-test-renderer'
import Login from '../../views/Login';
// import Home from '../../views/Home';
const sum = (a,b)=>{
    return a +b
}
test('renders đúng', () => {
    expect(sum(2,2)).toBe(4)
})

