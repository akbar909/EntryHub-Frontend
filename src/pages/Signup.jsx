import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import validator from 'validator';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleConfirm = () => {
        setConfirmPassword(!confirmPassword);
    };

    const handleSignup = async () => {
        // Validation logic
        const newErrors = {};

        // Name validation
        if (validator.isEmpty(userData.name)) {
            newErrors.name = 'Name is required';
        }

        // Email validation
        if (!validator.isEmail(userData.email)) {
            newErrors.email = 'Invalid email address';
        }

        // Password validation
        if (validator.isEmpty(userData.password)) {
            newErrors.password = 'Password is required';
        }

        // Confirm Password validation
        if (validator.isEmpty(userData.confirmPassword)) {
            newErrors.confirmPassword = 'Confirm Password is required';
        } else if (!validator.equals(userData.password, userData.confirmPassword)) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            try {
                // Backend API call
                const response = await axios.post('http://localhost:4000/users', {
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                });
        
                console.log('Signup Response:', response);
        
                if (response.data === 'User already exists') {
                    // User already exists
                    alert('User already exists. Please log in or use a different email.');
                } else {
                    // Signup successful
                    console.log('Signup Successful:', response.data);
        
                    // Clear the form after successful signup
                    setUserData({
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    });
                    setErrors({});
                    // Redirect to home page after signup
                    navigate('/login');
                }
            } catch (error) {
                console.error('Signup Failed:', error.message);
                // Display an alert for signup failure
                alert('User already exists. Please log in or use a different email.');
            }
        };
    };

    return (
        <motion.div
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -180 }}
            transition={{ duration: 0.8 }}
        >
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-md w-full p-6 space-y-2 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            className={`mt-1 p-2 w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className={`mt-1 p-2 w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            value={userData.password}
                            onChange={handleInputChange}
                            className={`mt-1 p-2 w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                        />
                        <span
                            onClick={handleTogglePassword}
                            className="absolute inset-y-0 top-6 right-0 flex items-center pr-2 cursor-pointer"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={confirmPassword ? 'text' : 'password'}
                            value={userData.confirmPassword}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                        <span
                            onClick={handleConfirm}
                            className="absolute inset-y-0 top-6 right-0 flex items-center pr-2 cursor-pointer"
                        >
                            {confirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                        )}
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={handleSignup}
                            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                        >
                            Sign Up
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
                        Already have an account?
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login
                       
                            </Link>
                </div>
            </div>
        </div>
    </motion.div>
);

};

export default Signup;
