import React from 'react';

export default class Button extends React.Component {
    render() {
        const { className } = this.props;
        return (
            <div
                onClick={ () => console.log('клик') }
                className={ className }
            >
                какой-то текст:
                { this.props.children }
            </div>
        )
    }
};