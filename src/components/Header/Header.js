import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="React"
            />
            <span className={s.brandTxt}>Paytm</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Paytm</h1>
            <p className={s.bannerDesc}>Complex web apps made easy</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
