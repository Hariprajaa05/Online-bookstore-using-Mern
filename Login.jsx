import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './main.css'; // Import your styles
import background from "./assets/images/background.jpg"; // Import background image

const Login = ({ submittedData }) => {
  const navigate = useNavigate(); // For navigation to signup page
  const [input, setInput] = React.useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  // Handle input change
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Form submission
  const formSubmitter = (e) => {
    e.preventDefault(); // Prevent page reload
    setErrorMessage('');
    setSuccessMessage('');

    // Validate input fields
    if (!input.email || !input.password) {
      return setErrorMessage('Please fill in all fields');
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email)) {
      return setErrorMessage('Please enter a valid email address');
    }

    // Check user credentials
    const foundUser = submittedData.find(
      (user) => user.email === input.email && user.password === input.password
    );

    if (!foundUser) {
      return setErrorMessage('Invalid email or password');
    }

    // Successful login
    setSuccessMessage('Successfully logged in!');
  };

  // Navigate to signup page
  const handleSignup = () => {
    navigate('/signup'); // Redirects to /signup
  };

  return (
    <div>
      <div
        className="limiter"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form className="login100-form validate-form" onSubmit={formSubmitter}>
            <span className="login100-form-title p-b-49"><center>Login</center  ></span>

            {/* Error and Success Messages */}
            {errorMessage && (
              <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>
            )}
            {successMessage && (
              <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
            )}

            {/* Email Field */}
            <div className="wrap-input100 validate-input m-b-23">
              <span className="label-input100">Email</span>
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Type your email"
                onChange={handleChange}
              />
              <span className="focus-input100" data-symbol="&#xf206;" />
            </div>

            {/* Password Field */}
            <div className="wrap-input100 validate-input">
              <span className="label-input100">Password</span>
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Type your password"
                onChange={handleChange}
              />
              <span className="focus-input100" data-symbol="&#xf190;" />
            </div>

    

            {/* Login Button */}
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button className="login100-form-btn">Login</button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="txt1 text-center p-t-54 p-b-20">
              <span>Or Sign Up Using</span>
            </div>
            <div className="flex-c-m">
              <button
                type="button"
                className="login100-form-btn"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
