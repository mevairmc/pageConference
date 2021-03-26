import React from 'react';

import './styles/badgeNews.css'
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';

class BadgeNews extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"></img>
        </div>
      </div>
    );
  }
}

export default BadgeNews;