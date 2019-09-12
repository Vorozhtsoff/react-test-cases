import React from 'react';
import { string, number, boolean, shape } from 'prop-types';

import './test.css';

/*
    null, false, undefined, ReactElement[], ReactElement
*/
class Test extends React.Component {
    static propTypes = {
        name: string,
        lastName: string
    }

    state = {
        count: 0
    };


    handleButton = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    }

    render() {

        return (
            <div className='test'>
                <button
                    className='test__button'
                    onClick={ this.handleButton }
                >
                    { this.state.count } { this.props.name }
                </button>

            </div>
        )
    }
}

export default Test;
