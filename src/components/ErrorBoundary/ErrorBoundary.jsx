import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import styles from './ErrorBoundary.scss';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    const { errorMessage, children } = this.props;
    if (hasError || errorMessage) {
      return (
        <>
          <Header />
          <div className={styles.container}>
            <Menu />
            <p>
              {`Sorry, something went wrong. ${errorMessage}.` }
            </p>
          </div>
          <Footer />
        </>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

ErrorBoundary.defaultProps = {
  errorMessage: '',
  children: '',
};
