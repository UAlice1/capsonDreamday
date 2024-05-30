import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { MdRingVolume } from 'react-icons/md';
import SuccessAlert from '../../../Components/SuccessAlert';
import ErrorAlert from '../../../Components/ErrorAlert';
const Signin = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState({
        title: "",
        description: ""
    });
    const [error, setError] = useState({
        title: "",
        description: ""
    });
    const navigate = useNavigate(); // Initialize useNavigate
    const signIn = (e) => {
        e.preventDefault();
        setError({ title: "", description: "" });
        setMessage({ title: "", description: "" });
        axios.post(`https://dream-day-rentals-16.onrender.com/api_docs/#/Users/post_user_signin`, user)
            .then(response => {
                if (response.status === 200) {
                    setMessage({ title: 'Success', description: response.data.message });
                    var localUserData = JSON.stringify(response.data.user);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('user', localUserData);
                    setTimeout(() => {
                        navigate('/'); // Navigate to the booking page
                    }, 3000);
                }
            })
            .catch(err => {
                setError({ title: 'Error', description: err.message });
            });
    }
    const handleInputs = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                </aside>
                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        {/* Success alert */}
                        {message.title && <SuccessAlert message={message} />}
                        {/* Error alert */}
                        {error.title && <ErrorAlert error={error} />}
                        <a className="block text-blue-600 mt-5" href="/">
                            <span className="sr-only">Home</span>
                            <MdRingVolume className="w-64 h-80" />
                        </a>
                        <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                            Welcome to Dreams Day's Rentals
                        </h1>
                        <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                            We are wedding planner and we decorate your ceremonies.
                        </p>
                        <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={signIn}>
                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInputs}
                                    className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleInputs}
                                    className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    type="submit"
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-[#A6C1EE] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                                >
                                    Sign in
                                </button>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                                    Does not have an account?
                                    <a href="/SignUp" className="text-gray-700 underline dark:text-gray-200">Create an account</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
}
export default Signin;