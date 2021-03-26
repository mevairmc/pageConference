import React from 'react';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt ="Logo de conferencia" />
        </div>

        <div>
          <img src={this.props.urlAvatar} alt ="Avatar" />
          <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
        </div>

        <div>
          <p>{this.props.jobTitle}</p>
          <p>{this.props.twitterAccount}</p>
        </div>
      </div>
    );
  }
}

export default Badge;