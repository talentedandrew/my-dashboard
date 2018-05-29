import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import { test } from '../../actions/runtime';

class Home extends React.Component {
  static propTypes = {
    test: PropTypes.func.isRequired, // for dummy purpose, remove it later
  };
  componentDidMount() {
    this.props.test();
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Paytm</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(connect(null, { test })(Home));
