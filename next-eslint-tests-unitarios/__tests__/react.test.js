/* eslint-disable */
import { render } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {

  	it('renders a heading', () => {
		const home = render( <Home /> )
		expect(home.container).toHaveTextContent('Welcome to Next.js')
	})

	test('find a tag by class name', () => {
		const home = render( <Home /> )
		home.container.querySelector('.welcome')
	})

	test('find welcome text by html class name in tag', () => {
		const home = render( <Home /> )
		const el =  home.container.querySelector('.welcome')
		expect(el).toHaveTextContent('Welcome to Next.js!')
	})

	test('find <code> tag', () => {
		const home = render( <Home /> )
		home.container.querySelector('li')
	})

})
