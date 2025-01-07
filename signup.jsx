import React, { useState } from 'react';
import Login from './Login';
import './main.css';
import background from "./assets/images/background.jpg"; 
const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });//[initial value,updated value]
  const [submittedData, setSubmittedData] = useState([]);
  const [errorMessage, seterrorMessage] = useState('');
  const [successMessage, setsuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;//getting values and storing in name,value all together by target...else we would write target.name,target.value
    setFormData({ ...formData, [name]: value });//updating the array formData
  };

  const formSubmitter = (e) => {
    e.preventDefault();
    setsuccessMessage('');
    seterrorMessage('');

    if (!formData.username || !formData.email || !formData.password) {
      return seterrorMessage('Please fill in all fields');
    }

    setSubmittedData([...submittedData, formData]);//adding with previous data
    setFormData({ username: '', email: '', password: '' });//resets 
    setsuccessMessage('Signup successful!');
  };

  return (
    <div>
      <div className="limiter">
        <div className="container-login100" style={{ backgroundImage: `url(${background})` }}>
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form" onSubmit={formSubmitter}>
              <span className="login100-form-title p-b-49"><center>Signup</center></span>
              {errorMessage.length > 0 && (
                <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>
              )}
              {successMessage.length > 0 && (
                <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
              )}
              <div className="wrap-input100 validate-input m-b-23" data-validate="username is required">
                <span className="label-input100">Username</span>
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Type your username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <span className="focus-input100" data-symbol="&#xf206;" />
              </div>
              <div className="wrap-input100 validate-input m-b-23" data-validate="email is required">
                <span className="label-input100">Email</span>
                <input
                  className="input100"
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <span className="focus-input100" data-symbol="&#xf206;" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="focus-input100" data-symbol="&#xf190;" />
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">Signup</button>
                </div>
              </div>
              <div className="flex-c-m">
                <a href="#" className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="login100-social-item bg2">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="login100-social-item bg3">
                  <i className="fa fa-google" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
      <Login submittedData={submittedData} />
    </div>
  );
};

export default Signup;
