import React from 'react';
import Title from '../Title';
import TextField from '@material-ui/core/TextField';


const AsyncCall = (data) => {
    setTimeout(() => {
        alert(JSON.stringify(data))
    }, 3000)
}

const styles = {
    container: {
        width: '300px',
        margin: '40px auto',

    }
}


const fieldnames = ['name', 'email', 'subject', 'message'];


export default class ContactUs extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleInput = (fieldName) => (event) => {
        this.setState({[fieldName]: event.currentTarget.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        AsyncCall({
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        });
    }

    renderFields = state => (fieldName) => {
        return (
            <div key={fieldName}>
                <TextField
                    name={fieldName}
                    label={fieldName}
                    value={ state[fieldName] }
                    onChange={ this.handleInput(fieldName) }
                />
            </div>
        )
    }

    render() {
        return (
            <div style={styles.container}>
                <Title>
                    CONTACT US
                </Title>
                <form onSubmit={ this.handleSubmit }>
                    { fieldnames.map(this.renderFields(this.state)) }
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}