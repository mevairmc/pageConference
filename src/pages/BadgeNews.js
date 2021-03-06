import React from 'react';

import './styles/badgeNews.css'
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm.js';

class BadgeNews extends React.Component {

  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } };

  handleChange = e => {
    this.setState({ form: {
        ...this.state.form, //save previous changes
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"></img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
            <Badge
                firstName = {this.state.form.firstName}
                lastName = {this.state.form.lastName}
                twitterAccount = {this.state.form.twitter}
                jobTitle = {this.state.form.jobTitle}
                email = {this.state.form.email}
                urlAvatar="https://secure.gravatar.com/avatar/ae15b44a34da0b1a8d7c5a6799a3344c://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=https://secure.gravatar.com/avatar/ae15b44a34da0b1a8d7c5a6799a3344c"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNews;