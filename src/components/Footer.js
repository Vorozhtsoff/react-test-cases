import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import  Button from './Button';

@inject('store')
@observer
export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
  }


  renderWithCreateElement() {
      return (
        React.createElement(
            'div',
            { className: 'text'},
            React.createElement(Button, { className: 'button'}, 'еще одна кнопка')
        )
      );
  }

  render() {
    return(
      <footer>
        { this.renderWithCreateElement() }
        <div>
            <Button className='button'>
                просто кнопка
            </Button >
        </div>
        <a href='https://twitter.com/alexdevero' target='_blank'>@alexdevero</a>

        {' '}
        | github:
        {' '}

        <a href='https://github.com/alexdevero' target='_blank'>alexdevero</a>
      </footer>
    )
  }
}
