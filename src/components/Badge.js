import React from 'react';

import './styles/badge.css';
import confLogo from '../images/badge-header.svg';


class Badge extends React.Component {
  render() {
    return (
      <div className="badge__container">
        <div className="badge__header">
          <img src={confLogo} alt ="Logo de conferencia" />
        </div>

        <div className="badge__section-name">
          <img
            className="badge__avatar"
            src={this.props.urlAvatar}
            alt ="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitterAccount}</div>
        </div>

        <div className="badge__footer" >#platzyconf</div>
      </div>
    );
  }
}

export default Badge;