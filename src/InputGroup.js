import classNames from 'classnames';
import React from 'react';

import InputGroupAddon from 'bee-input-group-addon';
import InputGroupButton from 'bee-input-group-button';


class InputGroup extends React.Component {
  render() {
    const { className, ...others } = this.props;

    let classes = {
    	'input-group' : true
    }

    return (
      <span
        {...others}
        className={classNames(className, classes)}
      />
    );
  }
}

InputGroup.Addon = InputGroupAddon;
InputGroup.Button = InputGroupButton;

export default InputGroup;