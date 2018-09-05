import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion';

const LinkStyle = css`
  margin: 0 2rem;
  color: white;
  font-size: 1.4rem;
  text-decoration: none;

  &:first-child { margin: 0; }
`;


const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={LinkStyle}>
          Home
        </Link>
        <Link to="/info" className={LinkStyle}>
          Info
        </Link>
        <Link to="/faq" className={LinkStyle}>
          FAQ
        </Link>
        <Link to="/forms" className={LinkStyle}>
          Forms
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
