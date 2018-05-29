import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Topbar.scss';

class Topbar extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <p> Topbar </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Topbar);
