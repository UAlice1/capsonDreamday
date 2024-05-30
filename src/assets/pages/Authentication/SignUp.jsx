import axios from "axios";
import { useState } from "react";
import { GiLinkedRings } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../../Components/SuccessAlert";
import ErrorAlert from "../../../Components/ErrorAlert";

const SignUp = () => {
    const navigate = useNavigate();

    const [message, setMessage] = useState({
        title: "",
        description: ""
    });

    const [error, setError] = useState({
        title: "",
        description: ""
    });

    const [user, setUser] = useState({
        Firstname: '',
        Lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        marketingAccept: false,
        role: "admin"
    });

    const clearInputs = () => {
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            marketingAccept: false
        });
    };

    const handleInputs = (e) => {
        const { name, value, type, checked } = e.target;
        setUser({
            ...user,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const SignUp = async (e) => {
        e.preventDefault();

        if (user.Firstname.length < 3) {
            setError({
                title: "Input error",
                description: "The first name must be at least 3 characters"
            });
            return;
        } else if (user.password !== user.confirmPassword) {
            setError({
                title: "Input error",
                description: "Passwords do not match"
            });
            return;
        } else {
            const { confirmPassword, marketingAccept, ...rest } = user;
            try {
                console.log(user)
                const response = await axios.post('https://dream-day-rentals-16.onrender.com/weeding/user/signup', user);
                console.log(response)
                if (response.status === 201) {
                    setMessage({
                        title: "Success",   
                        description: response.data.message
                    });

                    setTimeout(() => {
                        navigate('/signin');
                    }, 3000);
                }
            } catch (error) {
                const errorMsg = error.response?.data?.message || 'Something went wrong';
                setError({
                    title: 'Error',
                    description: errorMsg
                });
            }
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt="Pattern"
                        src="/SignUp.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">

                        {/* Success alert */}
                        {message.title && <SuccessAlert message={message} />}

                        {/* Error alert  */}
                        {error.title && <ErrorAlert error={error} />}

                        <a className="block text-blue-600 mt-5" href="/">
                            <span className="sr-only">Home</span>
                            <svg
                                className="h-8 sm:h-10"
                                viewBox="0 0 28 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* SVG content */}
                            </svg>
                        </a>

                        <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl font-italic">
                            Welcome to Dreams day Rental's <GiLinkedRings />
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                            Connect with us to decorate your ceremony
                        </p>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={SignUp}>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name="Firstname"
                                    required
                                    value={user.Firstname}
                                    onChange={handleInputs}
                                    className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="LastName"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    id="Lastname"
                                    name="Lastname"
                                    value={user.Lastname}
                                    onChange={handleInputs}
                                    className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>

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

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Password"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
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

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="PasswordConfirmation"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Password Confirmation
                                </label>

                                <input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="confirmPassword"
                                    value={user.confirmPassword}
                                    onChange={handleInputs}
                                    className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="MarketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketingAccept"
                                        checked={user.marketingAccept}
                                        onChange={handleInputs}
                                        className="h-5 w-5 p-3 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                                    />

                                    <span className="text-sm text-gray-700 dark:text-gray-200">
                                        I want to receive emails about events, product updates and company announcements.
                                    </span>
                                </label>
                            </div>

                            <div className="col-span-6">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    By creating an account, you agree to our
                                    <a href="#" className="text-gray-700 underline dark:text-gray-200">
                                        terms and conditions
                                    </a>
                                    and
                                    <a href="#" className="text-gray-700 underline dark:text-gray-200"> privacy policy </a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    type="submit"
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                                >
                                    Create an account
                                </button>

                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                                    Already have an account?
                                    <a href="/signin" className="text-gray-700 underline dark:text-gray-200">Login</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
}

export default SignUp;
