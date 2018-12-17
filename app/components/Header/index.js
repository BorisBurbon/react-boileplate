import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        {/* <A href="https://twitter.com/mxstbr"> */}
        {/* <Img src={Banner} alt="react-boilerplate - Logo" /> */}
        {/* </A> */}
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/login">Login</HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
