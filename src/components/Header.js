import React, { Component } from 'react';
import { arrayOf, number } from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import Button2 from './Button';
import Test from './Test';

import Nav from './Nav';
import Button from './ui/Button';

@inject('store')
@observer
export default class Header extends Component {
    static propTypes = {
        buttons: arrayOf(number)
    }

    static defaultProps = {
        buttons: [1, 2]
    }

	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	authenticate(e) {
		if (e) e.preventDefault();

		console.log('CLICKED BUTTON');

		this.store.authenticate();
    }

    renderButton = (item) => <Test name={`test${item}`} />

    renderButtons = (buttons) => {
        return buttons.map(this.renderButton);
    }

	render() {
        const { authenticated } = this.store;

		return (
			<header className='header'>
                { this.renderButtons(this.props.buttons) }
				<Nav location={this.props.location} />
				<Button
					onClick={this.authenticate.bind(this)}
					title={authenticated ? 'Log out' : 'Sign in'}
				/>
			</header>
		);
	}
}
