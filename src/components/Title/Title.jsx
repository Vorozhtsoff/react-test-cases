import React from 'react';
import { string } from 'prop-types';

export default class Title extends React.Component {
    static propTypes = {
        children: string
    }

    render() {
        return (
            <h2>{this.props.children}</h2>
        )
    }
}