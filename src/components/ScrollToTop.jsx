import React from 'react';
import {
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';


class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({}).isRequired,
};
export default withRouter(ScrollToTop);
