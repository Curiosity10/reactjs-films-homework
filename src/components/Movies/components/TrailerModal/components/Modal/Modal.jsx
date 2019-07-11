import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const { id } = this.props;
    this.el.id = id;
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return createPortal(
      children,
      this.el,
    );
  }
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
