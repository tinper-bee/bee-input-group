import classnames from 'classnames';
import React from 'react';

import InputGroupAddon from 'bee-input-group-addon';
import InputGroupButton from 'bee-input-group-button';

const defaultProps = {
  clsPrefix: 'u-input-group'
}

class InputGroup extends React.Component {
  render() {
    const { className,clsPrefix, ...others } = this.props;


    return (
      <span
        {...others}
        className={classnames(className, clsPrefix)}
      />
    );
  }
}

/**
  * 将InputGroupAddon与InputGroupButton组件作为InputGroup的附属组件
  */
InputGroup.Addon = InputGroupAddon;
InputGroup.Button = InputGroupButton;
InputGroup.defaultProps = defaultProps;
export default InputGroup;