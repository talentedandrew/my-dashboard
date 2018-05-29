import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.scss';
import AppContainer from '../../containers/AppContainer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return <AppContainer> {this.props.children} </AppContainer>;
  }
}

export default withStyles(normalizeCss, s)(Layout);
