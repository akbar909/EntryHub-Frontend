import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useTheme } from '../components/ThemeContext';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { isLoggedIn, toggleLoginStatus } = useTheme();
  const navigate = useNavigate();

 
  const handleLogin = async () => {
    try {
        // Make an API request to check if the user exists in the database
        const response = await axios.get(`http://localhost:4000/users/${username}`);

        console.log('Backend Response:', response.data);

        if (response.data.exists) {
            // User exists, check the password
            const storedPassword = response.data.password;

            if (password === storedPassword) {
                // Passwords match, proceed with login
                console.log('Login successful');
                toggleLoginStatus();
                navigate('/');
            } else {
                // Passwords do not match, show error message
                alert('Incorrect password. Please try again.');
            }
        } else {
            // User does not exist, show message to sign up
            alert('You do not have an account. Please sign up.');
        }
    } catch (error) {
      alert('You do not have an account. Please sign up.');
    }
};


  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 180 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -180 }}
      transition={{ duration: 0.8 }}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 space-y-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 top-6 right-0 flex items-center pr-2 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="w-full bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400"
            >
              Back
            </button>
          </div>
          <div className="text-center text-sm">
            Don't have an account?
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;