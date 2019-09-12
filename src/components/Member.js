import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ContactForm from './Contact-form';
import ContactUs from './Contact-us';

@inject('store')
@observer
export default class Member extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store;
		return (
			<div className='page member'>
				<main>
					<h1>Members' area</h1>
                    <ContactForm />
                    <ContactUs />
				</main>
			</div>
		);
	}
}
