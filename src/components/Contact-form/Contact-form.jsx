import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class ContactForm extends React.Component {

    state = {
        list: [],
        firstname: '',
        lastname: ''
    }

    handleInput = (fieldName) => (e) => {
        this.setState({ [fieldName]: e.currentTarget.value });
    }

    handleSubmit = () => {
        this.setState({
            list: [...this.state.list, {
                firstname: this.state.firstname,
                lastname: this.state.lastname
            }],
            firstname: '',
            lastname: ''
        })
    }

    renderContainer = (firstname, lastname) => {
        return (
            <div style={{ width: '300px', padding: '20px 40px', backgroundColor: '#eee' }}>
                firstname { firstname } <br />
                lastname { lastname }
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <h1>Form</h1>
                { this.renderContainer(this.state.firstname, this.state.lastname) }
                <TextField
                    label='name'
                    onChange={ this.handleInput('firstname') }
                    value={ this.state.firstname }
                />
                <TextField
                    label='lastname'
                    value={ this.state.lastname}
                    onChange={ this.handleInput('lastname') }
                />
                <button
                    type='button'
                    onClick={ this.handleSubmit }
                >submit</button>
                {
                    this.state.list.map((item) => this.renderContainer(item.firstname, item.lastname))
                }
            </React.Fragment>
        );
    }
}
