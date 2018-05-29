import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Header from '../components/Header';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import { saveTopBarData } from '../actions/common/topbarActions';

class AppContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    saveTopBarData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('headerchange', event => {
      this.props.saveTopBarData(event.data);
    });
  }

  render() {
    return (
      <div>
        <Topbar />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withStyles()(connect(null, { saveTopBarData })(AppContainer));
